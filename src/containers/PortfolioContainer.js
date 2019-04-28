import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  displayStocks = () => {
    let stocks = this.props.stocks.map(stock => {
      return <Stock onClick={this.props.onClick} key={stock.ticker} stock={stock} />;
    });
    stocks = stocks.sort((l, h) => {
      if (this.props.sort === "Alphabetically") {
        if (l.props.stock.ticker < h.props.stock.ticker) return -1;
        if (h.props.stock.ticker < l.props.stock.ticker) return 1;
        return 0;
      } else if (this.props.sort === "Price") {
        return h.props.stock.price - l.props.stock.price;
      } else {
        return 0;
      }
    });
    console.table(stocks);
    return stocks;
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.displayStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
