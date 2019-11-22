import React, { Component } from "react";

import { updateVote } from "../api";

class VoteCounter extends Component {
  state = { voteChange: 0 };

  handleVote = direction => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + direction };
    });
    const voteData = {
      articleId: this.props.data.article_id,
      commentId: this.props.comment_id,
      inc_votes: direction
    };
    updateVote(voteData);
  };

  render() {
    const {
      data: { votes }
    } = this.props;
    return (
      <section className="vote-section">
        <div
          disabled={this.state.voteChange === 1}
          className="up-vote"
          onClick={() => this.handleVote(1)}
        />
        <div>{votes + this.state.voteChange}</div>
        <div
          disabled={this.state.voteChange === -1}
          className="down-vote"
          onClick={() => this.handleVote(-1)}
        />
      </section>
    );
  }
}

export default VoteCounter;
