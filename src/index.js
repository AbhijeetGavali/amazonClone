import React from 'react';
import ReactDOM from 'react-dom';

import Header from './templet/header';
import Hero from './templet/heroSec';
import Sidebar from './templet/sidebar';
import SectionBody from './templet/sectionBody'; 
import Footer from './templet/footer';
import Chatbot from './aplications/chatbot';


ReactDOM.render(
  <>
    <Header/>
    <Hero/>
    <Sidebar/>
    <SectionBody/>
    <Footer/>
    <Chatbot/>
  </>,
  document.getElementById('root')
);