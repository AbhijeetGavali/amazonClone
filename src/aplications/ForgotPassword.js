import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

export default function ForgotPassword({ login }) {
    // setting variable that is email of user
    const [userEmail, setUserEmail] = useState('')
    const [x, setx] = useState(true)

    // input from user save in variablr
    function setChange(e) {
        if (e.target.name === 'mail') {
            setUserEmail(e.target.value);
        };
    }

    // getting password from backend
    function getPassword(e) {
        e.preventDefault();
        var forgotuser = {
            user_Email: userEmail
        }

        // requesting from backend to collect User password credintials
        axios.post('http://localhost/user/account/forget-password', forgotuser)
            .then(data => {
                // user credits
                var div = document.getElementById('warrning');
                div.classList = "warrning";
                div.innerHTML = data.data;
                div.style.backgroundColor = "rgba(75, 189, 75, 0.733)"
                if (data.data === 'Password for this User has send to this email') {
                    setx(false)
                }
            })
            .catch(err => console.log("Error : ", err))
    }

    let { path, url } = useRouteMatch();
    return (<Router>
        <Redirect to="/account/Forgot-password" />
        <div className="accountBox">
            <form className="loginForm" onSubmit={getPassword}>
                <label><h3>Type your e-mail id The password will be send to your email.</h3></label>
                <div id="warrning"></div>
                <label htmlFor="forgetMail"><input type="email" name="mail" id="forgetMail" onChange={setChange} placeholder="User Name" /><i className="fas fa-user-tie" required /></label>
                {x ? <button type="submit" className="btn">Get Password</button>
                    : <button type="button" className="btn" onClick={() => { login(true) }}>Sign in</button>
                }
            </form>
        </div>
    </Router>);
}
