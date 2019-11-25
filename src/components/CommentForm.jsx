import React from "react";

class CommentForm extends React.Component {
  state = { isLoading: true, comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const { comment } = this.state;
    const { articleId, currentUser } = this.props;

    event.preventDefault();
    this.props.addComment(articleId, currentUser, comment);
    this.setState({ comment: "" });
  };

  render() {
    return this.props.currentUser === "LOGIN" ? (
      <p id="please-login">Please login to post comment...</p>
    ) : (
      <form id="comment-form" onSubmit={this.handleSubmit}>
        <textarea
          required
          onChange={this.handleChange}
          id="comment-input"
          placeholder="Add a comment..."
          value={this.state.comment}
        />
        &nbsp; &nbsp;
        <button id="submit-comment-button" title="Submit Comment" type="submit">
          &lt;Submit/&gt;
        </button>
      </form>
    );
  }
}

export default CommentForm;
