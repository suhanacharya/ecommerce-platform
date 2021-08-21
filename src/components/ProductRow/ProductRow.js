import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./ProductRow.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductRow = ({ category, prodList }) => {
  return (
    <div className="row">
      <h1>{category}</h1>
      <Carousel
        breakPoints={breakPoints}
        itemsToShow={4}
        itemPadding={[5, 5, 5, 5]}
        outerSpacing={5}
        pagination={false}
        enableMouseSwipe={false}
      >
        {prodList.map((prod, key) => {
          //   console.log(prod);
          let logo = prod.prodImgUrl[0];
          return (
            <Link
              to={{
                pathname: `/product/${prod.prodId}`,
              }}
            >
              <img
                className="img-fluid banner rounded"
                key={key}
                alt="product"
                src={logo}
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductRow;
