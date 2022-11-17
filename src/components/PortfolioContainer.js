import React, { useState, useEffect } from "react";
import Stock from "./Stock";


function PortfolioContainer(props) {
const myPortfolio = [props.addStock]

  // function sellStock () {
  //   console.log("sold stock")
  // }
  const displayMyPortfolio = myPortfolio[0].map((stock) => 
    <Stock 
      key={stock.id}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      ticker={stock.ticker}
      clickStock={props.sellStock}
/>
  )
  console.log(myPortfolio)

  return (
    <div>
      <h2>My Portfolio</h2>
        {myPortfolio ? displayMyPortfolio : ''}
    </div>
  );
}

export default PortfolioContainer;
