import React from "react";

function Stock({name, type, price, ticker, clickStock}) {

  return (
    <div onClick={() => clickStock(name, type, price, ticker)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
