import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stockURL = "http://localhost:3000/stocks";

class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      initialStocks: [],
      allStocks: [],
      portfolioStocks: [],
    }
  }

  componentDidMount(){
    fetch(stockURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          initialStocks: data,
          allStocks: data
        })
      })
  }

  stockClickHandler = (event) => {
    let newPortfolioStocks = [...this.state.portfolioStocks]
    let stock = this.state.allStocks.find(stock => stock.id === parseInt(event.currentTarget.dataset.id))
    if(stock.count === undefined || stock.count === 0){
      stock.count = 1;
      newPortfolioStocks.push(stock);
    } else{
      stock.count++;
    }
    this.setState({
      portfolioStocks: newPortfolioStocks,
    })
  }

  portfolioStockClickHandler = (event) => {
    let newPortfolioStocks = [...this.state.portfolioStocks]
    let stock = this.state.allStocks.find(stock => stock.id === parseInt(event.currentTarget.dataset.id))
    if(stock.count === undefined || stock.count === 0){
      console.log("do nothing")
    } else if(stock.count === 1){
      newPortfolioStocks.splice(newPortfolioStocks.indexOf(stock), 1);
      stock.count--;
    }
    else{
      stock.count--;
    }

    this.setState({
      portfolioStocks: newPortfolioStocks,
    })
  }

  sortChangeHandler = (event) => {
    let newStocks = [...this.state.allStocks]
    if(event.target.value === "Alphabetically"){
      newStocks.sort((stock1, stock2) => {
        if(stock1.name < stock2.name){
          return -1
        } else if(stock1.name > stock2.name){
          return 1
        }
        return 0;
      })
    }else if(event.target.value === "Price"){
      newStocks.sort((stock1, stock2) => {
        if(stock1.price < stock2.price){
          return -1
        } else if(stock1.price > stock2.price){
          return 1
        }
        return 0;
      })
    }
    this.setState({
      allStocks: newStocks
    })
  }

  filterChangeHandler = (event) => {
    let selection = event.target.value;
    let newStocks = [...this.state.initialStocks];
    if(selection === "None"){
      console.log("none")
    } else if(selection === "Tech"){
      newStocks = this.state.initialStocks.filter(stock => stock.type === "Tech");
    } else if(selection === "Finance"){
      newStocks = this.state.initialStocks.filter(stock => stock.type === "Finance");
    } else if(selection === "Sportswear"){
      newStocks = this.state.initialStocks.filter(stock => stock.type === "Sportswear");
    }
    this.setState({
      allStocks: newStocks
    })
  }

  render() {
    return (
      <div>
        <SearchBar sortChangeHandler={this.sortChangeHandler} filterChangeHandler={this.filterChangeHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.allStocks} stockClickHandler={this.stockClickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} stockClickHandler={this.portfolioStockClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
