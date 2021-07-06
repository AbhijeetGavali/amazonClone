import React from 'react';
import '../CSS/footer.css';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (<>
    <footer id="footer">
      <button className="go-to-top" onClick={scrollToTop} >Go To Top &#9757;</button>
      <div className="container">
        <div className="data">
          <h3>E-commerce</h3>
          <p>Purchase of your choice <br /> Find your product here.</p>
        </div>
        <div className="contact">
          <h3>Contact:</h3>
          <p>warje malwadi, pune - 411058</p>
          <a href="mailto:help@ecommerce.com">help@ecommerce.com</a><br />
          <a href="tel:+917517990047">+ 91 75179 90047</a>
        </div>
      </div>
      <div className="copyright">&copy; 2020 Copyright: e-commerece.com | All rights reserved.</div>
    </footer>
  </>);
}
export default Footer;