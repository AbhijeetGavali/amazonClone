import React from 'react'
import axios from 'axios';
import BuyNow from './BuyNow'

export default function ProductPage(props) {

    function addToCart() {
        const addToCart = {
            userId: props.props.userID,
            productId: props.props.ID
        }

        axios.post('http://localhost:3001/user/detail/cart/add', addToCart)
            .then(data => {
                var div = document.getElementById("warning");
                div.innerHTML = data.data;
                div.style.backgroundColor = "rgb(37, 255, 66)";
                div.style.padding = "8px 10px";
                div.style.margin = "0px 20px";
                div.style.borderRadius = "30px";
                div.style.textAlign = "center";
            })
            .catch(err => { console.log(err) })
        }
        
        
    return (<>
        <div className="ProductPage">
            <img className="img" src={props.props.src} alt={props.props.productName} />
            <div className="contain">
                <div>
                    <div id="warning" > </div>
                    <button type="button" className="btn" onClick={props.functionClosed}>&times;</button>
                </div>
                <div className="desc">
                    <h3>{props.props.productName}</h3>
                    <span>{props.props.price}</span>
                    <p>{props.props.productDesc}</p>
                    <div className="actionBtn">
                        <button onClick={addToCart} >Add to cart</button>
                        <button >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="overlay" onClick={props.functionClosed} />
    </>);
};