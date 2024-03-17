import { testimonialsData } from "@/src/utils/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const SlickSlider = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initial: 0,
    touchMove: true,
    useCSS: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          Infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          InfiniteSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((Comment, i) => (
          <div key={i} className="comment">
            {/*Upper Side */}
            <div className="c-content">
              <img
                src={"/apos.svg"}
                className="apos-slider"
                alt="apos"
                width={40}
                height={30}
              />
              <span>{Comment.comment} </span>
            </div>
            {/*Lower Side */}
            <div className="c-info">
              <div className="c-avatar">{Comment.name[0]}</div>
              <div className="c-person">
                <span>{Comment.name} </span>
                <span>{Comment.profession} </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
