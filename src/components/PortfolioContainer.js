import React, { useState, useEffect } from "react";
import Stock from "./Stock";


function PortfolioContainer() {
  const [myPortfolio, setMyPortfolio] = useState([])

  // if(!portfolio) {
  //   setIsEmpty(true)
  // } else {
  //   setIsEmpty(false)
  // }

  // function handleStockClick(event) {
  //   if(event.target.className === 'card-body') {
  //     setNewStock(event.target)
  //   } else {
  //     return
  //   }
  //   console.log(newStock)
  // }
  // function buyStock() {
  //   console
  // }

  const displayMyPortfolio = myPortfolio.map((stock) => 
    <Stock 
      key={stock.id}
      name={stock.name}
      price={stock.price}
      // stockClick={buyStock}
    />
  )


  return (
    <div>
      <h2>My Portfolio</h2>
        {displayMyPortfolio}
    </div>
  );
}

export default PortfolioContainer;
