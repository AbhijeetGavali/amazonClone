import React, { useState } from 'react'
import axios from 'axios';
import ForgotPassword from './ForgotPassword'

export default function UserDetails({ props }) {
    const [x, setX] = useState(true)
    const [edit, setEdit] = useState(true)
    const [userFirstName, setuserFirstName] = useState('')
    const [userLastName, setSetuserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordc, setUserPasswordc] = useState('')
    const [forgetPasswordFunc, setForgetPasswordFunc] = useState(true)

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
    function updateFunc(e) {

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
            axios.post('http://localhost:3001/user/account/register/add', register)
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


    return (
        <div className="userProfile">
            {edit ? <div className="container">
                <label className="input" id="profileUserFName" > Name : {props.userName} </label>
                <label className="input" id="profileUserEmail" > E-mail Id : {props.userMail} </label>
                <label className="input btn-1" onClick={() => { setForgetPasswordFunc(false) }} >Forgot Password ?</label>
                <button type="button" className="btn" onClick={() => { setEdit(false) }} > Edit profile </button>
                {forgetPasswordFunc ? null : <ForgotPassword login={setForgetPasswordFunc} />}
            </div>
                : <form onSubmit={updateFunc}>
                    <label className="wlc">Welcome</label>
                    <div className="body">
                        <div className="form">

                            {/* div for warning message  */}
                            <div id="warrning">{x}</div>

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
                                    <input type="email" className="blocked" disabled="disabled" name="mail" id="mail" onChange={setChange} value={props.userMail} required />  </label>
                            </div>

                            {/* password field  */}
                            <div className="password">
                                <label htmlFor="password">Password :
                                    <input type="password" name="password" id="password" onChange={setChange} required />  </label>
                                <label htmlFor="passwordc">Conform Password :
                                    <input type="password" name="passwordc" id="passwordc" onChange={setChange} required />  </label>
                            </div>
                        </div>
                        {/* Update button  */}
                        <button type="submit" className="btn" >Update Profile</button>
                    </div>
                </form>
            }
        </div >
    )
}
