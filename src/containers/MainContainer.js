import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    myStocks: [],
    sortBy: 'default',
    filterBy: 'All'
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(allStocks => this.setState({allStocks}))
  }

  changeSortBy = (e) => {
    this.setState({sortBy: e.target.value})
  }

  changeFilter = (e) => {
    this.setState({filterBy: e.target.value})
  }

  stocksForDisplay = () => {
    let stockToDisplay = this.sortedStocks(this.filteredStocks(this.state.allStocks))
    return stockToDisplay
  }

  sortedStocks = (allStocks) => {
    if (this.state.sortBy === 'Alphabetically') {
      return allStocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
    } else if (this.state.sortBy === 'Price'){
      return allStocks.sort((a, b) => a.price - b.price)
    } else {
      return allStocks
    }
  }

  filteredStocks = (allStocks) => {
    if (this.state.filterBy === 'Tech'){
      return allStocks.filter(stock => stock.type === 'Tech')
    } else if (this.state.filterBy === 'Sportswear'){
      return allStocks.filter(stock => stock.type === 'Sportswear')
    } else if (this.state.filterBy === 'Finance'){
      return allStocks.filter(stock => stock.type === 'Finance')
    } else {
      return allStocks
    }
  }

  addClickHandler = (e, s) => {
    const myS = this.state.myStocks
    if (!myS.find(st => st.id === s.id)) {
      this.setState({myStocks: [...this.state.myStocks, s]})
    }
  }

  subClickHandler = (e, s) => {
    const myS = this.state.myStocks
    if (myS.find(st => st.id === s.id)) {
      const i = myS.indexOf(s)
      myS.splice(i, 1)
      this.setState({myStocks: myS})
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          changeSortBy={this.changeSortBy}
          changeFilter={this.changeFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                allStocks={this.stocksForDisplay()}
                clickHandler={this.addClickHandler}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                myStocks={this.state.myStocks}
                clickHandler={this.subClickHandler}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
