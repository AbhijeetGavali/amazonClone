import React, { useState } from 'react'
import '../CSS/Account.css'

export default function Account(props) {
    const [user, setUser] = useState(false)
    const [login, setLogin] = useState(false)
    let subTotal = 0;

    function getPassword  () {
        var x = 1;
    }
    return (
        <div id="accountBox">
            {
                user ? <>
                    Hello world
                </>
                    : login ? <>
                        <input type="email" name="loginMail" id="loginMail" />
                        <input type="password" name="loginPassword" id="loginPassword" />
                        <p onClick={getPassword}>forgot password ?</p>
                        <button type="button" className="btn" onClick={() => { setUser(true) }}>Login</button>
                    </>
                        : <>
                            <h3>Hello</h3>
                            <p>Already a customer ?</p>
                            <button type="button" className="btn" onClick={() => { setLogin(true) }}>Sign in</button>
                            <p>New customer ?</p>
                            <button type="button" className="btn" onClick={props.close}>Sign Up</button>
                        </>
            }
        </div>
    );
};
