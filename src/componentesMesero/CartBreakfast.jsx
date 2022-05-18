import { useState } from "react";
import { db } from "../firebase/firebase-config";
import {collection, addDoc, Timestamp } from "firebase/firestore";

const CartBreakfast = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  console.log(cartItems);
  const [newName, setNewName] = useState("");
  const userCollectionRef = collection(db, "orders");

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  
  const totalPrice = itemsPrice;

  const createOrder = async () => {
    console.log("creado")
    await addDoc(userCollectionRef, {
      Customer: newName, 
      Order: cartItems, 
      status:"Pending",
      created: Timestamp.fromDate(new Date()),
    });
    console.log()
  }

  

  return (
    <section className="cart">
    <input type="text" placeholder="Nombre del cliente" className='cliente' 
    onChange={(e) => {setNewName(e.target.value)} } />
    <h2 className="order">Order:</h2>
    <div>{cartItems.length === 0 && <div> Cart is Empty </div>}</div>
    {cartItems.map((item) => (
      <div key={item.id} className="row">
        <div className="col-2 cart">{item.name}</div>
        <div className="buttons-addRemove">
          <button onClick={() => onAdd(item)} className="add">
            +
          </button>
          <button onClick={() => onRemove(item)} className="remove">
            -
          </button>
        </div>
        <div className="col-2 text-right cart">
          {item.qty} x $ {item.price}.00
        </div>
      </div>
    ))}
    {cartItems.length !== 0 && (
      <>
      <hr />
      <div className="row">
        <div className="col-2 cart">Items Price</div>
        <div className="col-1 text-right cart">$ {itemsPrice}.00</div>
      </div>
      <div className="row">
        <div className="col-2 cartTotal"><strong>Total</strong></div>
        <div className="col-1 text-right cartTotal">$ {totalPrice.toFixed(2)}</div>
      </div>
      </>
    )}
    <button className='sendOrder' onClick={createOrder}>Send Order to Kitchen</button>
    </section>
  )
}

export default CartBreakfast;