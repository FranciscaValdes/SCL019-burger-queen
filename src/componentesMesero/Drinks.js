import dataMenu from "./dataMenu.json";
import React from "react";  //{useContext}
// import {UserContexts} from "../userContent/userContent";
import { Button } from "react-bootstrap";
export default function Drinks() {

    // const {cart, setCart} = useContext(UserContexts);

    //función para añadir productos
    // function addToCart(item){
    //     setCart([...cart, {...item, count:1 }]);
    //     console.log("click producto");
    // }
    //onClick={() => addToCart(item)}

    return (
        <div className="menu">
            {dataMenu.drinks.map((item) => {
                return (
                    <div>
                        <Button 
                        variant="outline-warning"
                        className="button-product" key={item.id}>
                            <h3 className="product-titles"> {item.product} </h3>
                            <h3 className="product-titles"> $ {item.price} </h3>
                        </Button>
                    
                    </div>
                )
            })}

        </div>
    )
}