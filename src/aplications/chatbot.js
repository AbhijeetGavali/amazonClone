import React from 'react'
import WelcomToChat from './welcomToChat';
import LeaveMessage from './leaveMessage';
import '../CSS/chatbot.css';

var x = 0;
var today = new Date();
var time = today.getHours();
var day = today.getDay();
if (day === 0 || day === 6 || time < 9 || time > 16) {
  x = 1;
}

function Chatbot() {
  function chatStartWlcPage() {
    document.getElementById("chatBox").style.display = "block";
    document.getElementById("chatLogoStart").style.display = "none";
  }
  function clickFunc_closeBot() {
    document.getElementById("chatBox").style.display = "none";
    document.getElementById("chatLogoStart").style.display = "block";
  }

  return (<>
    <div className="chat-bot">
      <div onClick={chatStartWlcPage} id="chatLogoStart" />
      <div id="chatBox">
        <section className="chatHeader"><button type="button" id="sendScript">...</button><div id="chatHeading">Welcome to live chat !</div><button type="button" onClick={clickFunc_closeBot}>X</button></section>
        <div id="chatArea">{x === 0 ? <WelcomToChat x={x} /> : <LeaveMessage userName={null} chatting={null} sendChatScript={null} userEmail={null} userSubject={null} x={x} msg="Our agents are not available right now. Please leave a message and we'll get back to you." />}</div>
        <footer className="chatFooter">Live chat bot</footer>
      </div>
    </div>
  </>);
}
export default Chatbot;