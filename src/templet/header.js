import React, { useState } from 'react'
import Kart from '../aplications/Kart'
import Account from '../aplications/Account'
import '../CSS/header.css';

function Header() {
  const [clickedAcc, setClickedAcc] = useState(false)
  const [clickedKart, setClickedKart] = useState(false)
  function clickAcc() {
    setClickedAcc(true)
  }
  function closedAcc() {
    setClickedAcc(false)
  }
  function clickKart() {
    setClickedKart(true)
  }
  function closedKart() {
    setClickedKart(false)
  }


  return (<>
    <header id="body-header">
      <div className="header-logo">&#9728;</div>
      <div className="searchbar">
        <input type="search" name="searchbar" id="searchbar" placeholder="Search your product" />
        <button type="submit">&#128269;</button>
      </div>
      <div className="right-logo" >
          <div className="item" onClick={clickKart} id="kartLogoStart" />
          <div className="item" onClick={clickAcc} id="accountLogoStart" />
        {clickedAcc?<><Account close={closedAcc}/><div onClick={closedAcc} className="overlay1"/></>:null}
        {clickedKart?<><Kart /><div onClick={closedKart} className="overlay1"/></>:null}
      </div>
    </header>
  </>);
}
export default Header;