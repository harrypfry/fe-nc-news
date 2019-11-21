import React from "react";

const ArticleHeader = ({ type, title, subtitle }) => {
  return (
    <div
      className={
        type === "general" ? "article-page-header" : "individual-page-header"
      }
    >
      <h1>
        <span className="red-text">&lt;</span>
        {title.toUpperCase()}
        <span className="red-text">/&gt;</span>
      </h1>
      <br />
      <h2>
        <span className="red-text">&lt;</span>
        {subtitle.toUpperCase()}
        <span className="red-text">/&gt;</span>
      </h2>
    </div>
  );
};

export default ArticleHeader;
