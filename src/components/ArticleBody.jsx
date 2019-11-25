import React from "react";
import { Link } from "@reach/router";

import CommentList from "./CommentList";

const ArticleBody = ({ currentUser, body, articleId, author }) => {
  return (
    <>
      <section className="item2" id="individual-article-item2">
        <section id="body-text">{body}</section>
        <div id="body-author">
          <Link to={`/users/${author}`}>{`by ${author}`}</Link>
        </div>
        <CommentList articleId={articleId} currentUser={currentUser} />
      </section>
    </>
  );
};

export default ArticleBody;
