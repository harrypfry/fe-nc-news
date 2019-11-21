import React from "react";

import voteImg from "./images/vote-img.png";

import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <>
      <tr className="article-table-row">
        <td className="vote-col">
          <img className="vote-img" src={voteImg} alt="vote" />
        </td>
        <td className="title-col">
          <div className="title-in-table">
            <Link
              state={{ title: article.topic, subtitle: article.title }}
              to={`/articles/${article.article_id}`}
            >
              {article.title}
            </Link>
          </div>
          <div className="info-in-table">
            written by {article.author} | {article.comment_count} comments |
            {new Date(article.created_at).toLocaleString()}
          </div>
        </td>
      </tr>
    </>
  );
};

export default ArticleCard;
