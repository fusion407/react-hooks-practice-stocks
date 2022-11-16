import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks))
  }, [])


  function handleStockClick(ticker, name, type, price) {
    setPortfolio(current => [...current,{
      ticker,
      name,
      type,
      price,
    }])
  }
  
  const renderStocks = stocks.map((stock) =>
    <Stock 
      key={stock.id}
      ticker={stock.ticker}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      stockClick={() => handleStockClick(
        stock.ticker,
        stock.name,
        stock.type,
        stock.price
        )}
    />
  )
  console.log(...portfolio)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
