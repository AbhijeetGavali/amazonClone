import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import '../CSS/sidebar.css';

function Sidebar() {
  return (<>
    <Router>
      <div className="category">
        <h3>Categories:</h3>
        <ul className="categories">
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Mobile">  <div className="btn item" > Mobile </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Beauty-Products"> <div className="btn item" > Beauty Products </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Watches"> <div className="btn item" > Watches </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Earphones"> <div className="btn item" > Earphones </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/E-book"> <div className="btn item" > E-book </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Audio-books"> <div className="btn item" > Audio books </div></Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/Categories/Templets"> <div className="btn item" > Templets </div></Link></li>
        </ul>
      </div>
    </Router>
  </>);
}
export default Sidebar;