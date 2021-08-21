import React from "react";
import Carousel from "react-elastic-carousel";
import "./Banner.css";
import { banners } from "../../consts";

const banner_list = banners;

const Banner = () => {
  return (
    <div className="row">
      <Carousel showArrows={false} enableMouseSwipe={false}>
        {banner_list.map((banner, key) => {
          return (
            <img
              className="img-fluid banner rounded"
              key={key}
              alt="banner"
              src={banner}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
