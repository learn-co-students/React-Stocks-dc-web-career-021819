import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.bought.map(s => (
          <Stock key={s.id} stock={s} cardClick={this.props.cardClick} />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
