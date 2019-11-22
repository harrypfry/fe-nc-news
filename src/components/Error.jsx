import React from "react";
import ArticleHeader from "./ArticleHeader";

import haroldImg from "./images/Harold.jpg";

const Error404 = ({ status, msg }) => {
  return (
    <>
      <ArticleHeader
        type="general"
        title="Error"
        subtitle={`${status}-${msg}`}
      />
      ;
      <div id="harold-wrapper">
        <img id="harold-image" src={haroldImg} alt="Hide the Pain Harold"></img>
      </div>
    </>
  );
};

export default Error404;
