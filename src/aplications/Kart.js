import React, { useState } from 'react'
import axios from 'axios';

import CartProduct from './CartProduct'
import '../CSS/Kart.css'

export default function Kart(props) {



    return (
        <div id="kartBox" >
            <div></div>
            <div className="cartBox">
                {
                    props.userID === null ?
                        <p>
                            Please Log in To viwe your cart
                        </p>
                        : props.productList === [] ?
                            <p id="cartBox">
                                Product is not selected to view in cart.
                            </p>
                            : <p id="cartBox">
                                {props.productList.map(DisplayProduct)}
                            </p>

                }
            </div>
            <div id="subtotalBox">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

function DisplayProduct(item) {
    const [products, setProducts] = useState({})
    const cartDetails = {
        productId: item
    }

    axios.post('http://localhost:3001/product/get', cartDetails)
        .then(data => {
            setProducts(data.data)
        })
        return <><CartProduct item={products} /></>
    }