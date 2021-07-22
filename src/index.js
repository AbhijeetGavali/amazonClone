import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './templet/header';
import Hero from './templet/heroSec';
import Sidebar from './templet/sidebar';
import SectionBody from './templet/sectionBody';
import Footer from './templet/footer';
import Chatbot from './aplications/chatbot';


ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);

function App() {
  const [userID, setUserID] = useState(null)
  return (<>
    <Header userID={userID} setUserID={setUserID} />
    <Hero />
    <Body userID={userID} />
    <Footer />
    <Chatbot />
  </>)
}

function Body(props) {
  return (<>
    <Sidebar />
    <SectionBody userID={props.userID} />
  </>)
}