import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CategoryBar from "../CategoryBar/CategoryBar";

const logo = require("../../assets/icons/store.jpg").default;
// console.log(logo);

const Navbar = () => {
  return (
    <div className="cust-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"}>
          <img className="img-fluid  logo" src={logo} alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="form-inline btn-margin mr-auto">
            <input
              class="form-control cust-form-text"
              type="search"
              placeholder="Search"
              aria-label="Search"
              Style={"margin-right:10px"}
            />

            <button
              class="btn btn-outline-success"
              Style={"margin-right:10px"}
              type="submit"
            >
              Search
            </button>
            <Link to={"/cart"}>
              <button
                class="btn btn-warning btn-margin"
                Style={"margin-right:10px"}
              >
                Cart
              </button>
            </Link>
          </form>
        </div>
      </nav>

      <CategoryBar className="cat-bar" />
    </div>
  );
};

export default Navbar;
