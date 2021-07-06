import React from 'react'
import '../CSS/sidebar.css';

function Sidebar() {
  return (<>
    <div className="category">
      <h3>Categories:</h3>
      <ul className="categories">
        <li><button className="btn item"> Mobile </button></li>
        <li><button className="btn item"> Beauty Products </button></li>
        <li><button className="btn item"> Watches </button></li>
        <li><button className="btn item"> Earphones </button></li>
        <li><button className="btn item"> E-book </button></li>
        <li><button className="btn item"> Audio books </button></li>
        <li><button className="btn item"> Templets </button></li>
      </ul>
    </div>
  </>);
}
export default Sidebar;