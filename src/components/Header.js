import React from "react";

function Header() {
  return (
    <header>
      <h1>Studio Ghibli Film Collection</h1>
      <nav>
        <button className="nav-link">Home</button> |
        <button className="nav-link">About Studio Ghibli</button> |
        <button className="nav-link">Characters</button>
      </nav>
    </header>
  );
}

export default Header;
