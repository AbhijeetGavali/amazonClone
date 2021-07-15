import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'

import axios from 'axios';

export default function RegisterFunction(props) {

    // setting variables for profile 
    const [userFirstName, setuserFirstName] = useState('')
    const [userLastName, setSetuserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordc, setUserPasswordc] = useState('')
    const [x, setX] = useState(true)

    // function setstate for incerting values in variable 
    function setChange(e) {
        if (e.target.name === 'firstName') {
            setuserFirstName(e.target.value);
        };
        if (e.target.name === 'lastName') {
            setSetuserLastName(e.target.value);
        };
        if (e.target.name === 'mail') {
            setUserEmail(e.target.value);
        };
        if (e.target.name === 'password') {
            setUserPassword(e.target.value);
        };
        if (e.target.name === 'passwordc') {
            setUserPasswordc(e.target.value);
        };
    }

    // defining function for the registration of new user 
    function registerFunc(e) {

        // for preventing form from reloading page 
        e.preventDefault();

        // if both of the password are equal
        if (userPassword === userPasswordc) {

            // defining object of credintials of registration
            const register = {
                user_FirstName: userFirstName,
                user_LastName: userLastName,
                user_Email: userEmail,
                user_Password: userPassword
            }

            // requesting from backend to create new user credintials
            axios.post('http://localhost:3001/user/account/register', register)
                .then(data => {
                    // user created
                    var div = document.getElementById('warrning');
                    div.classList = "warrning";
                    div.innerHTML = data.data;
                    div.style.backgroundColor = "rgba(75, 189, 75, 0.733)"
                    if (data.data === 'You have Registor sucssesfully') {
                        setX(false)
                    }
                })
                .catch(err => console.log("Error : ", err))
        } else {
            // throughing warning 
            var div = document.getElementById('warrning');
            div.classList = "warrning";
            div.innerHTML = "Passwords are not matching"

            // setting password fild blank
            document.getElementById('password').value = "";
            document.getElementById('passwordc').value = "";
        }

    }
    return (<Router>
        <Redirect to='/account/register' />
        <div className="accountBox2">
            <div id="resister">

                {/* left side information  */}
                <div className="info">
                    <h3>E-commerce,</h3>
                    <p>Welcome to e-commerce family.</p>
                    <p>You'll never strugle to find a product again. !</p>
                </div>

                {/* registration form */}
                <form onSubmit={registerFunc}>
                    <label className="wlc">Welcome</label>
                    <div className="body">
                        <div className="form">

                            {/* div for warning message  */}
                            <div id="warrning"></div>

                            {/* name filed  */}
                            <div className="name">
                                <label htmlFor="firstName">First Name :
                                    <input type="text" name="firstName" id="firstName" onChange={setChange} required />  </label>
                                <label htmlFor="lastName">Last Name :
                                    <input type="text" name="lastName" id="lastName" onChange={setChange} required />  </label>
                            </div>

                            {/* Email filed  */}
                            <div className="mail">
                                <label htmlFor="mail">Email :
                                    <input type="email" name="mail" id="mail" onChange={setChange} required />  </label>
                            </div>

                            {/* password field  */}
                            <div className="password">
                                <label htmlFor="password">Password :
                                    <input type="password" name="password" id="password" onChange={setChange} required />  </label>
                                <label htmlFor="passwordc">Conform Password :
                                    <input type="password" name="passwordc" id="passwordc" onChange={setChange} required />  </label>
                            </div>
                        </div>

                        {/* submition of the form  */}
                        <div className="submit">

                            {/* trem of use checkbox  */}
                            <label htmlFor="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" required />
                                I have read and agreed your terms and condition.
                            </label>

                            {/* registration or login button  */}
                            {x ? <button type="submit" className="btn" >Regiter</button>
                                : <button type="button" className="btn" onClick={() => { props.setLogin(true) }} style={{ backgroundColor: "green" }} >Sign in</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Router>);
}
