import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

export default function LoginFunction(props) {

    // setting variables for profile 
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // function setstate for incerting values in variable 
    function setChange(e) {
        if (e.target.name === 'mail') {
            setUserEmail(e.target.value);
        };
        if (e.target.name === 'password') {
            setUserPassword(e.target.value);
        };
    }

    // function for getting login information
    function userLogin(e) {
        // for preventing form from reloading page 
        e.preventDefault();

        // defining object of credintials of ligin
        const login = {
            user_Email: userEmail,
            user_Password: userPassword
        }

        // requesting from backend to collect login credintials
        axios.post('http://localhost:3001/user/account/login', login)
            .then(data => {
                // user not found
                if (data.data === 'notFound') {
                    var div = document.getElementById('warrning');
                    div.classList = "warrning";
                    div.innerHTML = ' User does not exist with this email.';
                    div.style.backgroundColor = "rgba(75, 189, 75, 0.733)"

                } else {
                    // user Found but Password not equal
                    if (data.data === 'Found' || data.data === 'Error') {
                        var div = document.getElementById('warrning');
                        div.classList = "warrning";
                        div.innerHTML = 'Enter valid credintials !';
                        div.style.backgroundColor = "rgba(75, 189, 75, 0.733)"
                    } else {
                        // user loged in
                        props.setUserID(data.data._id);
                        props.setUserMail(data.data.user_Email);
                        props.setUserName(data.data.user_FirstName+" " + data.data.user_LastName);
                        props.setUserPassword(data.data.user_Password)
                    }
                }

            })
            .catch(err => console.log("Error : ", err))
    }
    return (<Router>
        <Redirect to='/account/Login' />
        <div className="accountBox">

            {/* login form  */}
            <form className="loginForm" onSubmit={userLogin}>
                <label><h3>Login</h3></label>

                {/* div to display warning message  */}
                <div id="warrning"></div>

                {/* input fields to get details required to login of user  */}
                <label htmlFor="loginMail"><input type="email" name="mail" id="loginMail" onChange={setChange} placeholder="User Name" /><i className="fas fa-user-tie" required /></label>
                <label htmlFor="loginPassword"><input type="password" name="password" id="loginPassword" onChange={setChange} placeholder="**** **** ****" /><i className="fas fa-unlock-alt" required /></label>

                {/* link to forget password  */}
                <p onClick={() => { props.setForgotPassword(true) }}>forgot password ?</p>

                {/* button  */}
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    </Router>);
}