import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import frontImage from "./img/HomeArt.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import Skeleton from "react-loading-skeleton";
import Feedback from "./Feedback";
import blockImage1 from "./img/image1.webp";
import blockImage2 from "./img/image2.webp";
import blockImage3 from "./img/image3.webp";

AOS.init();

function Home() {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.userData.users);

  return (
    <div className="home">
      <div className="home-front">
        <div className="home-big">
          <img
            src={frontImage}
            width="900px"
            onLoad={() => setLoading(false)}
            alt="big beautiful logo"
          ></img>
          {loading && <Skeleton width={900} height={443} />}
        </div>
      </div>
      <h4 className="home-title" data-aos="fade-up">
        Here We Are
      </h4>
      <div className="home-blocks">
        <div className="home-block" data-aos="fade-right">
          <img
            src={blockImage1}
            alt="beautiful block"
            className="home-block-image"
          ></img>
          <div className="home-text">
            <h3 className="home-block-title">
              Excepteur eu ex voluptate ipsum.
            </h3>
            <p className="home-block-description">
              Ea reprehenderit consectetur in aliqua aliquip ipsum ad ea
              reprehenderit consectetur ex proident ad. Do ea sit consectetur
              commodo dolor ut velit. Duis quis quis in aliqua enim irure
              voluptate enim proident Lorem reprehenderit et dolor. Aute quis
              fugiat culpa labore nisi.
            </p>
          </div>
        </div>
        <div className="home-block" data-aos="flip-left">
          <img
            src={blockImage2}
            className="right home-block-image"
            alt="beautiful block"
          ></img>
          <div className="home-text">
            <h3 className="home-block-title">
              Excepteur eu ex voluptate ipsum.
            </h3>
            <p className="home-block-description">
              Ea reprehenderit consectetur in aliqua aliquip ipsum ad ea
              reprehenderit consectetur ex proident ad. Do ea sit consectetur
              commodo dolor ut velit. Duis quis quis in aliqua enim irure
              voluptate enim proident Lorem reprehenderit et dolor. Aute quis
              fugiat culpa labore nisi.
            </p>
          </div>
        </div>
        <div className="home-block" data-aos="fade-up">
          <img
            src={blockImage3}
            alt="beautiful block"
            className="home-block-image"
          ></img>
          <div className="home-text">
            <h3 className="home-block-title">
              Excepteur eu ex voluptate ipsum.
            </h3>
            <p className="home-block-description">
              Ea reprehenderit consectetur in aliqua aliquip ipsum ad ea
              reprehenderit consectetur ex proident ad. Do ea sit consectetur
              commodo dolor ut velit. Duis quis quis in aliqua enim irure
              voluptate enim proident Lorem reprehenderit et dolor. Aute quis
              fugiat culpa labore nisi.
            </p>
          </div>
        </div>
      </div>
      <h2 className="feedback-title" data-aos="fade-up">
        Feedback
      </h2>
      <div className="carousel" data-aos="zoom-in">
        <Carousel itemsToScroll={1} itemsToShow={2}>
          {users
            .filter((user) => user.feedback)
            .map((user) => (
              <Feedback user={user} key={user.userLogin} />
            ))}
        </Carousel>
      </div>

      <div data-aos="flip-down">
        <Form />
      </div>
    </div>
  );
}

export default Home;
