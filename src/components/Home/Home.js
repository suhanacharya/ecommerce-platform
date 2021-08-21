import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import ProductRow from "../ProductRow/ProductRow";
import Footer from "../Footer/Footer";

import { bookProducts, beautyProducts, electronicProducts } from "../../consts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Banner />
        <ProductRow
          key={Date.now().toString()}
          category={"Books"}
          prodList={bookProducts}
        />
        <ProductRow
          key={Date.now().toString()}
          category={"Beauty"}
          prodList={beautyProducts}
        />
        <ProductRow
          key={Date.now().toString()}
          category={"Electronics"}
          prodList={electronicProducts}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
