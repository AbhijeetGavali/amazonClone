import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'

import Kart from '../aplications/Kart'
import Account from '../aplications/Account'
import '../CSS/header.css';

function Header() {

  // setting variables to use 
  const [clickedAcc, setClickedAcc] = useState(false)
  const [clickedKart, setClickedKart] = useState(false)
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  const [userMail, setUserMail] = useState('')

  return (<Router>

    {/* header function */}
    <header id="body-header">
      {/* main logo  */}
      <div className="header-logo">&#9728;</div>

      {/* search bar  */}
      <div className="searchbar">
        <input type="search" name="searchbar" id="searchbar" placeholder="Search your product" />
        <button type="submit">&#128269;</button>
      </div>

      {/* right side icons */}
      <div className="right-logo" >
        {/* cart logo  */}
        <div className="item" onClick={() => { setClickedKart(true) }} id="kartLogoStart" />
        {clickedKart ? <><Kart userID={userID} /><div onClick={() => { setClickedKart(false) }} className="overlay1" /></> : <Redirect to='/' />}
        {/* acc logo */}
        <div className="item" onClick={() => { setClickedAcc(true) }} id="accountLogoStart" />
        {clickedAcc ? <><Account userID={userID} setUserID={setUserID} userMail={userMail} userName={userName} setUserName={setUserName} setUserMail={setUserMail} close={setClickedAcc} /><div onClick={() => { setClickedAcc(false) }} className="overlay1" /></> : <Redirect to='/' />}
      </div>
    </header>
  </Router>);
}
export default Header;