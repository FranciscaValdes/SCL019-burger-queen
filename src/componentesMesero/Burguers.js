import dataMenu from "./dataMenu.json";
import React from "react";  //{useContext}
// import {UserContexts} from "../userContent/userContent";

export default function Burguers() {

    // const {cart, setCart} = useContext(UserContexts);

    //función para añadir productos
    // function addToCart(item){
    //     setCart([...cart, {...item, count:1 }]);
    //     console.log("click producto");
    // }
    //onClick={() => addToCart(item)}

    return (
        <div className="menu">
            {dataMenu.burguers.map((item) => {
                return (
                    <button className="button-product" key={item.id}>
                        <h3 className="product-titles"> {item.product} </h3>
                        <h3 className="product-titles"> $ {item.price} </h3>
                    </button>
                )
            })}
        </div>
    )
}