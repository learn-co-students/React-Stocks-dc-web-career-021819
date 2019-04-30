import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    bought: [],
    available: [],
    sortType: "",
    filterType: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          available: data
        });
      });
  }

  buyStockHandler = stock => {
    const index = this.state.available.findIndex(s => s.id === stock.id);
    this.setState(
      {
        bought: [...this.state.bought, stock],
        available: [
          ...this.state.available.slice(0, index),
          ...this.state.available.slice(index + 1)
        ]
      },
      this.sortStocks
    );
  };

  sellStockHandler = stock => {
    const index = this.state.bought.findIndex(s => s.id === stock.id);
    this.setState(
      {
        bought: [
          ...this.state.bought.slice(0, index),
          ...this.state.bought.slice(index + 1)
        ],
        available: [...this.state.available, stock]
      },
      this.sortStocks
    );
  };

  onCardClick = stock => {
    this.state.bought.includes(stock)
      ? this.sellStockHandler(stock)
      : this.buyStockHandler(stock);
  };

  onSortChange = event => {
    this.setState(
      {
        sortType: event.target.value
      },
      this.sortStocks
    );
  };

  sortStocks = () => {
    switch (this.state.sortType) {
      case "Alphabetically":
        this.setState({
          available: this.state.available.sort((a, b) =>
            a.ticker.localeCompare(b.ticker)
          ),
          bought: this.state.bought.sort((a, b) =>
            a.ticker.localeCompare(b.ticker)
          )
        });
        break;
      case "Price":
        this.setState({
          available: this.state.available.sort((a, b) => a.price - b.price),
          bought: this.state.bought.sort((a, b) => a.price - b.price)
        });
        break;
    }
  };

  onFilterChange = event => {
    this.setState(
      {
        filterType: event.target.value
      },
      this.filterHandler
    );
  };

  filterHandler = () => {
    switch (this.state.filterType) {
      case "Sportswear":
        this.setState(
          {
            available: this.state.available.filter(
              stock => stock.type === "Sportswear"
            ),
            bought: this.state.bought.filter(
              stock => stock.type === "Sportswear"
            )
          },
          this.sortStocks
        );
        break;
      case "Tech":
        this.setState(
          {
            available: this.state.available.filter(
              stock => stock.type === "Tech"
            ),
            bought: this.state.bought.filter(stock => stock.type === "Tech")
          },
          this.sortStocks
        );
        break;
      case "Finance":
        this.setState(
          {
            available: this.state.available.filter(
              stock => stock.type === "Finance"
            ),
            bought: this.state.bought.filter(stock => stock.type === "Finance")
          },
          this.sortStocks
        );
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          sort={this.onSortChange}
          sortType={this.props.sortType}
          filter={this.onFilterChange}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              cardClick={this.onCardClick}
              stocksList={this.state.available}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              bought={this.state.bought}
              cardClick={this.onCardClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
