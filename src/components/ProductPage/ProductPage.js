import React from "react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Carousel from "react-elastic-carousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductPage.css";
import { productList } from "../../consts";

const ProductPage = ({ match }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  // const updateCart = () => {}
  console.log(cartItems);

  console.log(productList);
  const [product, setProduct] = useState({
    prodImgUrl: [""],
    prodCategory: "",
    prodId: "",
    prodName: "",
    mrp: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    console.log(match.params.productid);

    productList.forEach((item) => {
      if (item.prodId === match.params.productid) {
        setProduct(item);
      }
    });
  });

  const addToCart = (prodId) => {
    setCartItems([...cartItems, prodId]);
    console.log(prodId + " added to cart!");
  };

  return (
    <div>
      <Navbar />
      <div className="container productPage">
        <div className="row">
          <div className="col">
            <div className="row">
              <Carousel showArrows={false} enableMouseSwipe={false}>
                {product.prodImgUrl.map((banner, key) => {
                  let logo = banner;
                  return (
                    <img
                      className="img-fluid banner rounded"
                      key={key}
                      alt="banner"
                      src={logo}
                    />
                  );
                })}
              </Carousel>
            </div>
            <div className="row">
              <br></br>
            </div>
            <div className="row">
              <div className="container">
                <div className="row ">
                  <div className="col d-flex justify-content-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => addToCart(product.prodId)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <h1> {product.prodName} </h1>
              </div>
              <div className="row">
                <h2>
                  MRP :<s>Rs {product.mrp}</s>
                </h2>
              </div>
              <div className="row">
                <h2>Price : Rs {product.price} </h2>
              </div>

              <div className="row">
                <h3>Description</h3>
                <div className="container">
                  <div className="row">{product.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
