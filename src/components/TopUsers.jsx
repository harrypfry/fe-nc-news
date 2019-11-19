import React from "react";

class TopUsers extends React.Component {
  state = {
    topUsers: ["tickle122", "grumpy19", "happyamy2016", "harryfry"]
  };

  render() {
    return (
      <section className="sidebar-section">
        <div className="sidebar-title">&lt; Top Users&gt;</div>
        <ol className="sidebar-body">
          {this.state.topUsers.map((user, index) => {
            return (
              <li className="sidebar-card" key={index}>
                {user}
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default TopUsers;
