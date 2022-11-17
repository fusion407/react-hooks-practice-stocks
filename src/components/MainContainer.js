import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import {v4 as uuidv4} from 'uuid';
function MainContainer() {

  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState('')


  function handleBuyStock( name, type, price, ticker) {
    let id = uuidv4();
    setPortfolio(current => [...current,{
      id,
      name,
      type,
      price,
      ticker
    }])
  }

  function handleSellStock(soldStock) {
    const updatedPortfolio = portfolio.filter((stock) => stock.name !== soldStock)
    console.log(updatedPortfolio)
    setPortfolio(updatedPortfolio)
  }

  function handleSortByAlphabet(e) {
    e.preventDefault();
    if(sortBy === true) return
    setSortBy(true)
    const sortedByAlphabet = [...portfolio].sort((a, b) => 
      a.name > b.name ? 1 : -1,
    )
    setPortfolio(sortedByAlphabet)
  }
  function handleSortByPrice(e) {
    e.preventDefault();
    if(sortBy === false) return
    setSortBy(false)
    const sortedByPrice = [...portfolio].sort((a, b) => 
      a.price > b.price ? 1 : -1,
    )
    setPortfolio(sortedByPrice)
  }

  function handleFilterStocks(e) {
    const updatedPortfolio = portfolio.filter((stock) => stock.type !== e.target.value)
    setPortfolio(updatedPortfolio)
    console.log(e.target.value)
  }
  return (
    <div>
      <SearchBar sortByAlphabet={handleSortByAlphabet} sortByPrice={handleSortByPrice} filterStocks={handleFilterStocks} isChecked={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer buyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer addStock={portfolio} sellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
