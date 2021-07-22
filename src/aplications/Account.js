import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'

import '../CSS/Account.css'

import DashBoard from './DashBoard'
import ForgotPassword from './ForgotPassword'
import LoginFunction from './LoginFunction'
import RegisterFunction from './RegisterFunction'

export default function Account(props) {
    // setting variables for use
    const [login, setLogin] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const [register, setRegister] = useState(false)


    return (<Router>
        <Redirect to='/account' />
        <div>
            {
                // dashbord renderning 
                props.userID !== null ? <DashBoard close={props.close} userID={props.userID} setUserID={props.setUserID}  userMail={props.userMail} userName={props.userName} />

                    // forgot password 
                    : forgotPassword ? <ForgotPassword login={setForgotPassword} />

                        // login of  user
                        : login ? <LoginFunction setUserID={props.setUserID} setUserName={props.setUserName} setUserMail={props.setUserMail} setForgotPassword={setForgotPassword} />

                            // registration of the user
                            : register ? <RegisterFunction setLogin={setLogin} />

                                // New customer dashboard
                                : <div className="accountBox">
                                    < div className="wlcLogin">
                                        <h3>Hello,</h3>
                                        <p>Already a customer ?</p>
                                        <button type="button" className="btn" onClick={() => { setLogin(true) }}>Sign in</button>
                                        <p>New customer ?</p>
                                        <button type="button" className="btn" onClick={() => { setRegister(true) }}>Sign Up</button>
                                    </div>
                                </div>
            }
        </div>
    </Router>);
};
