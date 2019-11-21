import React from "react";

import { getUser } from "../api";

const ArticleUserInfo = ({ author }) => {
  console.log(author);
  return (
    <section className="sidebar-user-info">
      <div className="sidebar-author-title">&lt;AUTHOR&gt;</div>
      <div className="sidebar-author-name">&lt;{author}&gt;</div>
      <div className="sidebar-author-photo">
        <img
          className="avatar-img"
          src="https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
          alt="User Avatar"
        ></img>
      </div>
    </section>
  );
};

export default ArticleUserInfo;
