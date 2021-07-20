import React from 'react'

export default function CartAndChecKout() {
    return (
        <div>
            <div className="cartBox">
                < div className="cartPage">
                    <h3>Hello,</h3>
                    <p>Already a customer ?</p>
                    <button type="button" className="btn" onClick={() => { setLogin(true) }}>Sign in</button>
                    <p>New customer ?</p>
                    <button type="button" className="btn" onClick={() => { setRegister(true) }}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
