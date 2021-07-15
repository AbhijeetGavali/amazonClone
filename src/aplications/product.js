import React, {useState} from 'react'
import ProductPage from "./productPage";
import '../CSS/product.css'

export default function Product(props) {
    const [clicked, setClicked] = useState('')
    function click(){
        setClicked(true)
    }
    function closed(){
        setClicked(false)
    }
    return (<>
    <div id="product" onClick={click}>
        <div className="productImg"><img className="img" src={props.src} alt={props.productName} /></div>
        <div className="productDesc">
            <div className="product-price">{props.price}</div>
            <div className="product-desc">
                <h1>{props.productName}</h1>
                <p>{props.productDesc}</p>
            </div>
        </div>
    </div>
        
    {clicked?<ProductPage props={props} functionClosed={closed}/>:null}
    </>);
};
