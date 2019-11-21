import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const ArticleBody = ({ body, articleId }) => {
  return (
    <>
      <section className="item2" id="individual-article-item2">
        <section id="body-text">{body}</section>
        <CommentForm />
        <CommentList articleId={articleId} />
      </section>
    </>
  );
};

export default ArticleBody;
