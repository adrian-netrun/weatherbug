import React from 'react'
import './NavBar.css'
import icon from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-weather-bug-256.png'

function NavBar() {
  return (
<div className="navbar-container">
  <div className="navbar">
    <img src={icon} alt="" />
    <h2>Weather Bug</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
  </div>
</div> 
  )
}

export default NavBar