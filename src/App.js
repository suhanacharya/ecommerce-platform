import React from "react";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <Router>
      <div>
        <CartProvider>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/product/:productid" component={ProductPage} />
            <Route path="/" exact component={Home} />
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;
