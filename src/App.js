import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "#728C00",
    padding: "10px",
    fontFamily: "bold Sans-Serif"
  };
  

  return (
<>
<header className='Header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="UL">
        <li className="H1">
          <a className="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-house"></i>    Home</a>
        </li>
        <li className="H2">
          <a className="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-cart-shopping"></i> Place new Order</a>
        </li>
        <li className="H3">
          <a className="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-globe"></i> Domains</a>
        </li>
        <li className="H4">
          <a className="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-book-open"></i> Knowledgebase
          </a>
        </li>
        <li className="H5">
          <a className="nav-link active" aria-current="page" href="#"> <i class="fa-regular fa-user"></i> Account
          </a>
        </li>
      </ul>
    </div>
</nav>
</header>
<div className="heero">
  <h3 style={myStyle}>Start Your Domain Name Search</h3>
</div>
<input
          type="text"
          className="searchInput"
          placeholder="Search ..." />
          
        <div className="fa searchIcon"></div>

</>
  );
}
export default App;