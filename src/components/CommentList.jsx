import React from "react";

import CommentCard from "./CommentCard";

import { getCommentsByArticleId } from "../api";

class CommentList extends React.Component {
  state = { comments: [], isLoading: true };
  // console.log(this.props)
  fetchComments = id => {
    console.log(id);
    getCommentsByArticleId(id).then(({ data }) => {
      this.setState(data);
    });
  };

  componentDidMount = () => {
    const { articleId } = this.props;
    this.fetchComments(articleId);
  };

  render() {
    return (
      <table className="comment-table">
        <tbody>
          {this.state.comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default CommentList;
