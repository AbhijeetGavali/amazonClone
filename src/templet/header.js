import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

import Kart from '../aplications/Kart'
import Account from '../aplications/Account'
import '../CSS/header.css';

function Header(props) {
  // setting variables to use 
  const [clickedAcc, setClickedAcc] = useState(false)
  const [clickedKart, setClickedKart] = useState(false)

  const [userName, setUserName] = useState('')
  const [userMail, setUserMail] = useState('')
  const [productList, setProductList] = useState([1, 2, 3])

  function getKartDetails() {

    if (props.userID !== null) {

      const cartDetails = {
        userId: props.userID
      }

      axios.post('http://localhost:3001/user/detail/cart', cartDetails)
        .then(data => {
          setProductList(data.data.productId)
        })
        .catch(err => {
          console.log(err)
        })

    }
  }
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
        <div className="item" onClick={() => { getKartDetails(); setClickedKart(true) }} id="kartLogoStart" />
        {clickedKart ? <><Kart productList={productList} userID={props.userID} /><div onClick={() => { setClickedKart(false) }} className="overlay1" /></> : <Redirect to='/' />}
        {/* acc logo */}
        <div className="item" onClick={() => { setClickedAcc(true) }} id="accountLogoStart" />
        {clickedAcc ? <><Account userID={props.userID} setUserID={props.setUserID} userMail={userMail} userName={userName} setUserName={setUserName} setUserMail={setUserMail} close={setClickedAcc} /><div onClick={() => { setClickedAcc(false) }} className="overlay1" /></> : <Redirect to='/' />}
      </div>
    </header>
  </Router>);
}
export default Header;