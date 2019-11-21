import React from "react";

import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { getCommentsByArticleId, postComment, deleteComment } from "../api";

class CommentList extends React.Component {
  state = { comments: [], isLoading: true };
  fetchComments = id => {
    getCommentsByArticleId(id).then(({ data }) => {
      this.setState(data);
    });
  };

  componentDidMount = () => {
    const { articleId } = this.props;
    this.fetchComments(articleId);
  };

  addComment = (articleId, currentUser, comment) => {
    postComment(articleId, currentUser, comment).then(
      ({ data: { comment } }) => {
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        });
      }
    );
  };

  removeComment = commentId => {
    deleteComment(commentId).then(() => {
      this.setState(currentState => {
        return {
          comments: [...currentState.comments].filter(comment => {
            return comment.comment_id !== commentId;
          })
        };
      });
    });
  };

  render() {
    const { articleId, currentUser } = this.props;
    return (
      <>
        <CommentForm
          articleId={articleId}
          currentUser={currentUser}
          addComment={this.addComment}
        />
        <table className="comment-table">
          <tbody>
            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  currentUser={currentUser}
                  key={comment.comment_id}
                  comment={comment}
                  removeComment={this.removeComment}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CommentList;
