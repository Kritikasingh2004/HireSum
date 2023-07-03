import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";

import divider1 from "../svg/divider1.svg";
import larrow from "../svg/left-arrow.png";
import rarrow from "../svg/right-arrow.png";
import prof1 from "../svg/prof1.jpg";
import prof2 from "../svg/prof2.jpg";
import prof3 from "../svg/prof3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Success = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [animationTriggered, setAnimationTriggered] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [animationTriggered]);

  return (
    <div ref={componentRef} className="scont">
      <img src={divider1} alt="img" className="divider1" />
      <div className="success-story">
        <h1 className="sc-h" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Success Stories</h1>
        <div className="stats" data-aos="zoom-in-up">
          <div className="data">
            <div className="number">
              {animationTriggered ? <CountUp end={220} duration={2} /> : 0}
            </div>
            <div className="text">Total number of Clients</div>
          </div>
          <div className="data data-mid">
            <div className="number">
              {animationTriggered ? <CountUp end={520} duration={2} /> : 0}
            </div>
            <div className="text">Successful Hires</div>
          </div>
          <div className="data">
            <div className="number">
              {animationTriggered ? <CountUp end={310} duration={2} /> : 0}
            </div>
            <div className="text">Positive Response</div>
          </div>
        </div>
        <div className="reviews" data-aos="flip-up">
          <Slider {...settings}>
            <div className="card">
              <img src={prof1} className="card-img" alt="img"/>
              <h1 className="card-txt">"Thanks to HireSum, our hiring process has become faster, more efficient, and highly effective."</h1>
            </div>
            <div className="card">
              <img src={prof2} className="card-img" alt="img"/>
              <h1 className="card-txt">"We highly recommend it to any company looking for a modern and efficient recruitment solution."</h1>
            </div>
            <div className="card">
              <img src={prof3} className="card-img" alt="img"/>
              <h1 className="card-txt">"HireSum has helped us attract top talent and has significantly reduced our time-to-hire. We are extremely pleased with the results and would highly recommend it."</h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="carousel-arrow carousel-prev-arrow" onClick={onClick}>
      <img src={larrow} alt="Previous" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="carousel-arrow carousel-next-arrow" onClick={onClick}>
      <img src={rarrow} alt="Next" />
    </div>
  );
};

export default Success;
