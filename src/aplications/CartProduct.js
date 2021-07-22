import React, { useState } from 'react'
import axios from 'axios';

export default function CartProduct({ item }) {

    return (
        <div className="cartProductPage">
            <img className="cartimg" src={item.url} alt={item.title} />

            <div className="desc">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <p>{item.shortDetails}</p>
                <div className="actionBtn">
                    <button >&#128465;</button>
                </div>
            </div>
        </div>
    )
}
