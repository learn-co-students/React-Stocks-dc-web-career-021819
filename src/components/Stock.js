import React from "react";

const Stock = ({ stock, cardClick }) => (
  <div>
    <div className="card" onClick={() => cardClick(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>
  </div>
);

export default Stock;
