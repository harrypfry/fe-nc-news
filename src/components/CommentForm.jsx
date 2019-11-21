import React from "react";

class CommentForm extends React.Component {
  state = { comment: "" };

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
    return (
      <form id="comment-form" onSubmit={this.handleSubmit}>
        <label>
          <textarea
            required
            onChange={this.handleChange}
            id="comment-input"
            value={this.state.comment}
          />
        </label>
        &nbsp; &nbsp;
        <button id="submit-comment-button" title="Submit Comment" type="submit">
          &lt;Submit/&gt;
        </button>
      </form>
    );
  }
}

export default CommentForm;
