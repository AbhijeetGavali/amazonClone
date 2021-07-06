import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Chatting from './chatting';

import '../CSS/chatbot.css';


export default function Welcome(props) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [chattingStart, setChattingStart] = useState('');

    // geting inputed values
    function handleOnChange(event) {
        if (event.target.name === 'chatUserName') {
            setUserName(event.target.value);
        };
        if (event.target.name === 'chatUserEmail') {
            setUserEmail(event.target.value);
        };
        if (event.target.name === 'chatUserSubject') {
            setUserSubject(event.target.value);
        };
    };

    // submitting data and clearing display
    function handleSubmit(event) {
        event.preventDefault();
        if (userSubject) {
            setChattingStart(true);
            document.getElementById("formArea").innerHTML = "";
            document.getElementById("formArea").style.height = 0;
            document.getElementById("formArea").style.padding = 0;
            document.getElementById("formArea").style.margin = 0;

            init("user_LdXRrREFsKKXRkZhIHonk");

            var templateParams = {
                name: userName,
                email: userEmail,
                subject: userSubject,
                message: "hello"
            };

            emailjs.send('hello', 'email_start_conversation', templateParams)
                .then(function (response) {
                    alert('SUCCESS!  we will get back to you soon!', response.status, response.text);
                }, function (error) {
                    alert('FAILED... <br> email not send :) you can connect with bot', error);
                });
        } else {
            document.getElementById("SubjectDisplay").innerHTML += "<br>Plese select Subject";
        }
    };


    return (<>
        <form id="form" className="form" onSubmit={handleSubmit}>
            <div id="formArea">
                <div className="welcomeTextInChat" id="SubjectDisplay"><p>Welcome in live support, enter required details and start conversation.</p><b>happy purchase :)</b><br /></div>
                <div className="userImg" />
                <label htmlFor="chatUserName">Your name :</label>
                <input onChange={handleOnChange} type="text" id="chatUserName" name="chatUserName" placeholder="Enter Your name" required />
                <label htmlFor="chatUserEmail">Your email :</label>
                <input onChange={handleOnChange} type="email" id="chatUserEmail" name="chatUserEmail" placeholder="Enter Your email" required />
                <label htmlFor="chatUserSubject">Select Subject :</label>
                <select onChange={handleOnChange} id="chatUserSubject" name="chatUserSubject" required>
                    <option selected value={false}>Select your subject</option>
                    <option value="refunPolicies">refund policies</option>
                    <option value="faq">FAQ</option>
                    <option value="productSuggetion">Suggest product with que</option>
                    <option value="customerSupport">Customer Support (live at 9 am to 5 pm)</option>
                </select>
            </div>
            {chattingStart ? <Chatting userName={userName} userEmail={userEmail} userSubject={userSubject} x={props.x}/> : <> <button type="submit">Start Chat</button></>}
        </form>
    </>);
}
