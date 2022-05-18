import dataMenu from "./dataMenu.json";
import React from "react";  
import {Button} from "react-bootstrap";




export default function Burguers() {


    return (
        <div className="menu">
            {dataMenu.burguers.map((item) => {
                return (
                    <Button
                    variant="outline-warning"
                     className="button-product" key={item.id}>
                        <h3 className="product-titles"> {item.product} </h3>
                        <h3 className="product-titles"> $ {item.price} </h3>
                    </Button>
                )
            })}

        </div>
    )
}
