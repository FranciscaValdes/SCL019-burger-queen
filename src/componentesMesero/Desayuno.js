import dataMenu from "./dataMenu.json";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import React,  {useContext} from "react"; 
// import {UserContexts} from "../userContent/userContent";

export default function Desayuno() {


    //función para añadir productos
     function addToCart(){
       
     };
    


    return (
        <div className="menu">
            {dataMenu.breakfast.map((item) => {
                return (
                    
                    <Button 
                    onClick={addToCart}
                    variant="outline-warning"
                    className="button-product" key={item.id} >
                        <h3 className="product-titles"> {item.product} </h3>
                        <h3 className="product-titles"> $ {item.price} </h3>
                    </Button>
                )
            })}
        </div>
    )
}


