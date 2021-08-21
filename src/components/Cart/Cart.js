import React from "react";
import { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartContext } from "../../context/CartProvider";
import "./Cart.css";
import { productList } from "../../consts";

// const itemsList = [
//   {
//     prodImgUrl: ["https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg"],
//     prodId: "100",
//     prodName: "Lemon Hand Wash",
//     mrp: "250",
//     price: "230",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
// },
// {
//     prodImgUrl: ["https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg"],
//     prodId: "101",
//     prodName: "Mango Face Wash",
//     mrp: "100",
//     price: "100",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
// },
// {
//     prodImgUrl: ["https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg"],
//     prodId: "102",
//     prodName: "Laptop",
//     mrp: "40000",
//     price: "38000",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
//   },
// ];

const Item = ({
  removeItem,
  prodImgUrl,
  prodId,
  prodName,
  price,
  mrp,
  description,
}) => {
  return (
    <div className="row bg-light mt-2 align-items-center">
      <div className="col">
        <img className="img-fluid" src={prodImgUrl[0]} alt="product" />
      </div>
      <div className="col">
        <div className="row">
          <h3>{prodName}</h3>
        </div>
        <div className="row">
          <h5>{description}</h5>
        </div>
        <div className="row">
          <button className="btn btn-danger" onClick={() => removeItem(prodId)}>
            Remove Item
          </button>
        </div>
      </div>
      <div className="col">
        <h4 className="price">Price: ₹{price}</h4>
      </div>
      <br />
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const newItemList = [];
    productList.forEach((item) => {
      if (cartItems.includes(item.prodId)) {
        newItemList.push(item);
      }
    });
    setItemList(newItemList);
  }, [cartItems]);

  useEffect(() => {
    let tempTotal = 0;
    for (let i = 0; i < itemList.length; i++) {
      tempTotal += parseFloat(itemList[i].price);
    }
    setTotal(tempTotal);
  }, [itemList]);

  const removeItem = (prodId) => {
    const newItemList = cartItems.filter((item) => item !== prodId);
    setCartItems(newItemList);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>My Cart</h1>
          </div>
        </div>

        {itemList.map((item, key) => {
          return <Item removeItem={removeItem} key={item.prodId} {...item} />;
        })}
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <h3>SubTotal: ₹{total}</h3>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <button className="btn btn-warning">Proceed to Pay</button>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
