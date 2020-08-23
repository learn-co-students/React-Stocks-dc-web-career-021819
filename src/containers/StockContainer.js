import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let filteredStocks
    (this.props.filterType !== "")
    ? filteredStocks = this.props.allStocks.filter(stock => stock.type === this.props.filterType)
    : filteredStocks = this.props.allStocks

    if(this.props.sortType === "Alphabetically") {
      filteredStocks.sort((stockA, stockB)=> {
        const tickerA = stockA.ticker
        const tickerB = stockB.ticker
        if (tickerA < tickerB) {return -1}
        if (tickerA > tickerB) {return  1}
        return 0
      })
    } else if (this.props.sortType === "Price") {
      filteredStocks.sort((stockA, stockB) => stockA.price - stockB.price)
    }


    return (
      <div>
        <h2>Stocks</h2>
          { filteredStocks.map(stock => {
              return <Stock
                        stats={stock}
                        key={stock.id}
                        togglePortfolio={this.props.togglePortfolio}
                      />
          })}
      </div>
    );
  }

}

export default StockContainer;
