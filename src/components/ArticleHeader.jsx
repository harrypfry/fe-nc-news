import React from "react";

const ArticleHeader = ({ title }) => {
  return (
    <div className="article-page-header">
      <span className="red-text">&lt;</span>
      {title.toUpperCase()}
      <span className="red-text">/&gt;</span>
    </div>
  );
};

export default ArticleHeader;
