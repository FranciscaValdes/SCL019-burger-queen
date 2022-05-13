import dataMenu from "./dataMenu.json";
import React from "react"; //{useContext}


export default function Desayuno() {

    return (
        <div className="menu">
            {dataMenu.breakfast.map((item) => {
                return (
                    <button className="button-product" key={item.id} >
                        <h3 className="product-titles"> {item.product} </h3>
                        <h3 className="product-titles"> $ {item.price} </h3>
                    </button>
                )
            })}
        </div>
    )
}


