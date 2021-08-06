import React, { useState } from "react";
import Form from "./Form";
import frontImage from "./img/HomeArt.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import Skeleton from "react-loading-skeleton";

AOS.init();

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="home">
      <div className="home-front">
        <div className="home-big">
          <img
            src={frontImage}
            width="1000px"
            onLoad={() => setLoading(false)}
          ></img>
          {loading && <Skeleton width={1000} height={493} />}
        </div>
      </div>

      <div className="home-block" data-aos="fade-right">
        1
      </div>
      <div className="home-block" data-aos="flip-left">
        2
      </div>
      <div className="home-block" data-aos="fade-up">
        3
      </div>

      <div className="carousel" data-aos="zoom-in">
        <Carousel itemsToScroll={1} itemsToShow={2}>
          <div className="feedback">1</div>
          <div className="feedback">1</div>
          <div className="feedback">1</div>
          <div className="feedback">1</div>
        </Carousel>
      </div>

      <div data-aos="fade-right" data-aos="flip-down">
        <Form />
      </div>
    </div>
  );
}

export default Home;
