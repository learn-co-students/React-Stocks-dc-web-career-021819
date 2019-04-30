import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocksList.map(s => (
          <Stock key={s.id} stock={s} cardClick={this.props.cardClick} />
        ))}
      </div>
    );
  }
}

export default StockContainer;
