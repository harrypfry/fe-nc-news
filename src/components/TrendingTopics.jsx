import React from "react";

import { Link } from "@reach/router";

class TrendingTopics extends React.Component {
  state = {
    trendingTopics: ["Coding", "Football", "Cooking"]
  };

  render() {
    return (
      <section className="sidebar-section">
        <div className="sidebar-title">&lt;Trending Topics&gt;</div>
        <ol className="sidebar-body">
          {this.state.trendingTopics.map((topic, index) => {
            return (
              <li className="sidebar-card" key={index}>
                <Link to={`/topics/${topic.toLowerCase()}`}>{topic}</Link>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default TrendingTopics;
