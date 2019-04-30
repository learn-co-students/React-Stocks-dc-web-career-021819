import React from 'react'

const Stock = ({stats, togglePortfolio}) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={()=>togglePortfolio(stats)}>
        <h5 className="card-title">{
            stats.name
          }</h5>
        <p className="card-text">{
            stats.ticker
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
