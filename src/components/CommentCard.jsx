import React from "react";

import voteImg from "./images/vote-img.png";

const CommentCard = ({ comment }) => {
  return (
    <>
      <tr className="comment-table-row">
        <td className="vote-col">
          <img className="vote-img" src={voteImg} alt="vote" />
        </td>

        <td className="comment-col">
          <div className="comment-info">
            {comment.author} - {new Date(comment.created_at).toLocaleString()}
          </div>
          <div className="comment-body">{comment.body}</div>
        </td>
      </tr>
    </>
  );
};

export default CommentCard;
