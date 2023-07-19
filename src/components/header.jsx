import React from "react";
import Search from "./search";

function Header() {
  return (
    <div className="header">
      <h1>Stocks</h1>
      <Search></Search>
    </div>
  );
}

export default Header;
