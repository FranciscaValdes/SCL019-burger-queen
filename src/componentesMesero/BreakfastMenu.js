import { useState } from "react";
import { Button } from "react-bootstrap";
import React from "react";
import dataMenu from "./dataMenu.json";
import CartBreakfast from "./CartBreakfast";


export default function BreakfastMenu() {


  const [cartItems, setCartItems] = useState([]);
  const addItem = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)   //exist busca que el item exista en la orden y para eso trata de encontrar que el id del articulo sea igual al id del item

    if (exist) {
      setCartItems(cartItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
  };
  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      );
    }
  }


  return (
    <div className="menu">
      {dataMenu.breakfast.map((item) => {
        return (

          <Button
            onClick={() => { addItem(item) }}
            value={item.product}
            variant="outline-warning"
            className="button-product" key={item.id} >
            <h3 className="product-titles"> {item.product} </h3>
            <h3 className="product-titles"> $ {item.price} </h3>
          </Button>
        )
      })}
      <div className='cartContent'>
        <CartBreakfast
          addItem={addItem}
          onRemove={onRemove}
          cartItems={cartItems}
        />
      </div>
    </div>

  )
}


