import React, { useState } from 'react'
import LeaveMessage from './leaveMessage';

import '../CSS/chatbot.css';



export default function Chatting(props) {
    const [chatEnd, setChatEnd] = useState('');
    const [userMsg, setUserMsg] = useState('');
    const [systemMsg, setSystemMsg] = useState('');
    const [chatting, setChatting] = useState('');

    // removing all unnessary gaps
    document.getElementById("chatArea").style.padding = "0px";
    document.getElementById("form").style.width = "275px";

    //setting input of user
    function handleChatChange(event) {
        if (event.target.name === 'chatMsgInput') {
            setUserMsg(event.target.value);
            setSystemMsg(searchSystemMessage())
        };
    };


    // searching for ans of user query
    function searchSystemMessage() {
        let systemDefaltMsg = "hello " + props.userName;
        return systemDefaltMsg;
    };

    // working on usermessage 
    function userMessage() {
        if (document.getElementById("chatMessage").value) {
            document.getElementById("chatMessage").value = "";
            if (userMsg === "exit") {
                chattingEnd();
            }else{
            displayUserMessage();
            displaySystemMessage();
            };
        };
    };

    // display of user message
    function displayUserMessage() {
        var newItem = document.createElement("LI");
        newItem.className = "userMessage";
        var textnode = document.createTextNode(userMsg);
        newItem.appendChild(textnode);
        var list = document.getElementById("myChatList");
        list.insertBefore(newItem, list.childNodes[0]);
    };

    // display of system ans to user query
    function displaySystemMessage() {
        var newItem = document.createElement("LI");
        newItem.className = "systemMessage";
        var textnode = document.createTextNode(systemMsg);
        newItem.appendChild(textnode);
        var list = document.getElementById("myChatList");
        list.insertBefore(newItem, list.childNodes[0]);
    };

    // ending chatting
    const chattingEnd = () => {
        setChatting(document.getElementById('myChatList'));
        document.getElementById("chat").innerHTML="";
        setChatEnd(true);
    };

    return (<>
        <div id="chat">
            <div id="chattingBox">
                <ul id="myChatList"></ul>
            </div>
            <div className="chatInput" id="chatInput">
                <input type="text" id="chatMessage" name="chatMsgInput" placeholder="Type here" onChange={handleChatChange} />
                <button type="button" onClick={userMessage} id="sendMessage">Send</button>
            </div></div>
        {chatEnd ?
            <LeaveMessage userName={props.userName} chatting={chatting} userEmail={props.userEmail} userSubject={props.userSubject} x={0} msg="We are always happy to help you please provide feadback" /> : null}
    </>)
};