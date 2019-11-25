import React from "react";

import ArticleList from "./ArticleList";
import ArticleHeader from "./ArticleHeader";
import TrendingTopics from "./TrendingTopics";
import TopUsers from "./TopUsers";

class Homepage extends React.Component {
  render() {
    return (
      <div className="article-page">
        <ArticleHeader
          type="general"
          title="NORTHCODERS NEWS"
          subtitle="HOME"
        />
        <div className="item2">
          <ArticleList />
        </div>
        <div>
          <div className="item3">
            <TrendingTopics />
          </div>
          <div className="item4">
            <TopUsers />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
