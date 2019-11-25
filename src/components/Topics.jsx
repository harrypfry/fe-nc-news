import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import TrendingTopics from "./TrendingTopics";
import TopUsers from "./TopUsers";

// class Topics extends React.Component {
//   state = {};
//   render() {
//     const { topic } = this.props;

//     return (
//       <div className="article-page">
//         <ArticleHeader
//           type="general"
//           title="NORTHCODERS NEWS"
//           subtitle={topic}
//         />
//         <div className="item2">
//           <ArticleList topic={topic} />
//         </div>
//         <div className="item3">
//           <TrendingTopics />
//         </div>
//         <div className="item4">
//           <TopUsers />
//         </div>
//       </div>
//     );
//   }
// }

const Topics = props => {
  const { topic } = props;
  return (
    <div className="article-page">
      <ArticleHeader type="general" title="NORTHCODERS NEWS" subtitle={topic} />
      <div className="item2">
        <ArticleList topic={topic} />
      </div>
      <div className="item3">
        <TrendingTopics />
      </div>
      <div className="item4">
        <TopUsers />
      </div>
    </div>
  );
};

export default Topics;
