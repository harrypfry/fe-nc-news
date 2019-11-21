import React from "react";
import CommentList from "./CommentList";

const ArticleBody = ({ currentUser, body, articleId }) => {
  return (
    <>
      <section className="item2" id="individual-article-item2">
        <section id="body-text">{body}</section>

        <CommentList articleId={articleId} currentUser={currentUser} />
      </section>
    </>
  );
};

export default ArticleBody;
