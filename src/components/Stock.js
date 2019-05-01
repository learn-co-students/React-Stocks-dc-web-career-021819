import React from 'react'

const Stock = ({ stockObj: {id, ticker, name, type, price, count}, stockClickHandler }) => (
  <div className="card" onClick={stockClickHandler} data-id={id} >
      <div className="card-body">
        <h5 className="card-title">
          { name }
        </h5>
        <p className="card-text">
          {ticker}: {price}
        </p>
      </div>
    </div>
  
);

export default Stock
