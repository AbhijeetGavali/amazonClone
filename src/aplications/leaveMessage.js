import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Chatting from './chatting';

// integrating with mail
init("user_LdXRrREFsKKXRkZhIHonk");

export default function LeaveMessage(props) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [chattingStart, setChattingStart] = useState('');

    function handleOnChange(event) {
        if (event.target.name === 'name') {
            setUserName(event.target.value);
        };
        if (event.target.name === 'email') {
            setUserEmail(event.target.value);
        };
        if (event.target.name === 'subject') {
            setUserSubject(event.target.value);
        };
        if (event.target.name === 'chatLeaveMessage') {
            setUserMessage(event.target.value);
        };
    };

    function chatWithBot() {
        if (document.getElementById("name").value &&
            document.getElementById("email").value &&
            document.getElementById("subject").value) {
            document.getElementById("formArea").innerHTML = "";
            document.getElementById("formArea").style.height = 0;
            document.getElementById("formArea").style.padding = 0;
            document.getElementById("formArea").style.margin = 0;
            setChattingStart(true);
        } else {
            document.getElementById("SubjectDisplay").innerHTML += "<br>Plese All Details.";
        };
    };


    function sendChatScript() {
        // setting parameters
        var templateParams = {
            name: props.userName,
            to_email: props.userEmail,
            message: JSON.parse(props.chatting)
        };
        
        // sending mail
        emailjs.send('hello', 'leave_message', templateParams)
            .then(function (response) {
                alert('SUCCESS!  check your mail!', response.status, response.text);
            }, function (error) {
                alert('FAILED... <br> email not send :) you can send it later', error);
            });
    };

    function leaveMessage() {
        if (document.getElementById("name").value &&
            document.getElementById("email").value &&
            document.getElementById("subject").value) {
            if (document.getElementById("chatLeaveMessage").value) {


                // setting parameters
                var templateParams = {
                    name: userName,
                    email: userEmail,
                    subject: userSubject,
                    message: userMessage
                };

                // sending mail
                emailjs.send('hello', 'email_start_conversation', templateParams)
                    .then(function (response) {
                        alert('SUCCESS!  we will get back to you soon!', response.status, response.text);
                    }, function (error) {
                        alert('FAILED... <br> email not send :) you can connect with bot', error);
                    });
            } else {
                document.getElementById("SubjectDisplay").innerHTML += "<br>Plese Type atleast hello as message";
            };
        } else {
            document.getElementById("SubjectDisplay").innerHTML += "<br>Plese select Subject";
        };
    };

    return (
        <>
            <form id="form" className="form">
                <div id="formArea">
                    <div className="userImg1" />
                    <p className="welcomeTextInChat" id="SubjectDisplay">{props.msg}</p>
                    <label htmlFor="name">Your name :</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your name" onChange={handleOnChange} required />
                    <label htmlFor="email">Your email :</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your email" onChange={handleOnChange} required />
                    <label htmlFor="subject">Subject :</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter subject" onChange={handleOnChange} required />
                    <label htmlFor="chatLeaveMessage">Message :</label>
                    <textarea name="chatLeaveMessage" id="chatLeaveMessage" cols="30" rows="2" placeholder="Type message here" />
                    <button id="leaveMessage" onClick={leaveMessage} type="button">Leave Message</button>
                    {props.x === 1 ? <button type="button" onClick={chatWithBot}>Chat with bot</button> : <button type="button" onClick={sendChatScript}>Send chat to mail.</button>}
                </div>
                {chattingStart ? <Chatting userName={userName} userEmail={userEmail} userSubject="chatWithBot" x={props.x} /> : null}
            </form>
        </>
    )
};
