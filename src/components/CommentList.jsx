import React from "react";

import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import loadingGif from "./images/loading.gif";

import { getCommentsByArticleId, postComment, deleteComment } from "../api";

class CommentList extends React.Component {
  state = { comments: [], isLoading: true };

  fetchComments = id => {
    this.setState({ isLoading: true });
    getCommentsByArticleId(id).then(({ data: { comments } }) => {
      this.setState({ comments, isLoading: false });
    });
  };

  componentDidMount = () => {
    const { articleId } = this.props;
    this.fetchComments(articleId);
  };

  addComment = (articleId, currentUser, comment) => {
    this.setState({ isLoading: true });
    postComment(articleId, currentUser, comment).then(
      ({ data: { comment } }) => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            isLoading: false
          };
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
        {this.state.isLoading ? (
          <div className="loading-img-wrapper">
            <img className="loading-img" src={loadingGif} alt="Loading..." />
          </div>
        ) : (
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
        )}
      </>
    );
  }
}

export default CommentList;
