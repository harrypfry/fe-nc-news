import React from "react";

import voteImg from "./images/vote-img.png";

const ArticleCard = ({ article }) => {
  return (
    <>
      <tr className="article-table-row">
        <td className="vote-col">
          <img className="vote-img" src={voteImg} alt="vote" />
        </td>
        <td className="title-col">
          <div className="title-in-table">{article.title}</div>
          <div className="info-in-table">
            written by {article.author} | {article.comment_count} comments |
            03/04/1993
          </div>
        </td>
      </tr>
    </>
  );
};

export default ArticleCard;
