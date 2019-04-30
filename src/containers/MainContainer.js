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
    this.state.myPortfolio.find(portfolioStock=> portfolioStock.id === stock.id) ?
    this.sellStock(stock) : this.buyStock(stock)
  }

  buyStock= (stockObj)=> {
    let stockToBuy = this.state.allStocks.find(stock=> stock.id === stockObj.id)
    let allStocks = this.state.allStocks.filter(stock=> {
          return stock.id !== stockObj.id
        })
    this.setState({
      myPortfolio: [...this.state.myPortfolio, stockToBuy],
      allStocks
    })
  }

  sellStock= (stockObj)=> {
    let stockToSell = this.state.myPortfolio.find(stock=> stock.id === stockObj.id)
    let myPortfolio = this.state.myPortfolio.filter(stock=> {
          return stock.id !== stockObj.id
        })
    this.setState({
      allStocks: [...this.state.allStocks, stockToSell],
      myPortfolio
    })
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

              <PortfolioContainer
                myPortfolio={this.state.myPortfolio}
                togglePortfolio={this.togglePortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
