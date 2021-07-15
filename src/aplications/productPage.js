import React from 'react'

export default function ProductPage(props) {

    return (<>
        <div id={props.props.src} className="ProductPage">
            <img className="img" src={props.props.src}  alt={props.props.productName}/>
            <div className="contain">
                <button type="button" className="btn" onClick={props.functionClosed}>&times;</button>
                <div className="desc">
                    <h3>{props.props.productName}</h3>
                    <span>{props.props.price}</span>
                    <p>{props.props.productDesc}</p>
                    <div className="actionBtn">
                        <button>Add to cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="overlay" onClick={props.functionClosed}/>
    </>);
};


// "XQuwIqVMQbmTvd0q"