import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const baseURL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state= {
    allStocks : [],
    myPortfolio: [],

  }

  componentDidMount() {
    fetch(baseURL)
    .then(r=>r.json())
    .then(allStocks=>{
      this.setState({
        allStocks
      })
    })
  }

  togglePortfolio= stock => {
    this.state.myPortfolio.includes(stock) ?
    console.log('its in my porfolio already, lets try to remove it', stock)
    : console.log('checking', stock.target)
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                allStocks={this.state.allStocks}
                togglePortfolio={this.togglePortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
