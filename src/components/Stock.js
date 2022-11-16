import React from "react";

function Stock({name, price, ticker, stockClick}) {
  // function handleStockClick(event) {
  //   event.preventDefault();
  //   if(event.target.className === "card-body") {
  //     console.log("card body clicked")
  //     return event.target
  //   } else {
  //     return
  //   }
  // }
  return (
    <div>
      <div onClick={stockClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
