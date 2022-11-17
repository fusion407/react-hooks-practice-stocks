import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({buyStock}) {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks))
  }, [])
  
  const renderStocks = stocks.map((stock) =>
    <Stock 
      key={stock.id}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      ticker={stock.ticker}
      clickStock={buyStock}
    />
  )
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
