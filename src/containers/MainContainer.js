import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      allStocks: [],
      userStocks: [],
      filter: "",
      sort: "",
    };
  }
  componentDidMount = async () => {
    const req = await fetch("http://localhost:3000/stocks");
    const stocks = await req.json();
    this.setState({ allStocks: stocks });
  };
  handleFilter = filter => {
    this.setState({ filter: filter === "No Filter" ? "" : filter });
  };
  handleSort = sort => {
    this.setState({ sort: sort === "No Sort" ? "" : sort });
  };
  displayStocks = () => {
    return this.state.allStocks.filter(s => s.type.includes(this.state.filter));
  };
  displayUserStocks = () => {
    return this.state.userStocks.filter(s => s.type.includes(this.state.filter));
  };
  addStock = stock => {
    console.log("Adding");
    console.table(stock);
    if (!this.state.userStocks.find(s => s.id === stock.id)) {
      this.setState({ userStocks: [...this.state.userStocks, stock] });
    }
  };

  removeStock = stock => {
    console.log("Removing");
    console.table(stock);
    const index = this.state.userStocks.indexOf(stock);
    this.setState({ userStocks: [...this.state.userStocks.slice(0, index), ...this.state.userStocks.slice(index + 1)] });
  };
  render() {
    return (
      <div>
        <SearchBar sort={this.state.sort} setSort={this.handleSort} setFilter={this.handleFilter} />

        <div className="row">
          <div className="col-8">
            <StockContainer sort={this.state.sort} onClick={this.addStock} stocks={this.displayStocks()} />
          </div>
          <div className="col-4">
            <PortfolioContainer sort={this.state.sort} onClick={this.removeStock} stocks={this.displayUserStocks()} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
