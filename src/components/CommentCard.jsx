import React from "react";

import VoteCounter from "./VoteCounter";

const CommentCard = ({ comment, removeComment, currentUser }) => {
  return (
    <>
      <tr className="comment-table-row">
        <td className="vote-col">
          <VoteCounter
            data={{ votes: comment.votes, comment_id: comment.comment_id }}
          />
        </td>

        <td className="comment-col">
          <div className="comment-info">
            {comment.author} - {new Date(comment.created_at).toLocaleString()}
            {comment.author === currentUser && (
              <>
                &nbsp; &nbsp;
                <button
                  onClick={() => removeComment(comment.comment_id)}
                  className="delete-comment-button"
                  title="Delete comment"
                >
                  X
                </button>
              </>
            )}
          </div>
          <div className="comment-body">{comment.body}</div>
        </td>
      </tr>
    </>
  );
};

export default CommentCard;
