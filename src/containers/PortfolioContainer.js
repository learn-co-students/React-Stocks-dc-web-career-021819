import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myPortfolio.map(stock => {
              console.log(stock)
              return <Stock
                        stats={stock}
                        key={stock.id}
                        togglePortfolio={this.props.togglePortfolio}
                      />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
