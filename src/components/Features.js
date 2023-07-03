import React from "react";

import divider from "../svg/divider.svg";
import hiring from "../svg/hiring.jpg";
import hiring2 from "../svg/hiring2.jpg";
import hiring3 from "../svg/hiring3.jpg";
import hiring4 from "../svg/hiring4.jpg";

const Features = () => {
  return (
    <div className="features" id="services">
      <img src={divider} className="divider" alt="img" />
      <div className="features-container">
        <h1 className="feature-h1" data-aos="fade-up">Features</h1>
        <div className="feature">
          <div className="feature-head">
            <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <span>Advanced candidate search</span> Find the perfect candidates
              based on location, job roles, and more.
            </h1>
          </div>
          <div className="feature-img">
            <img src={hiring} alt="img"  data-aos="zoom-in"/>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={hiring2} alt="img"  data-aos="zoom-in"/>
          </div>
          <div className="feature-head">
            <h1 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <span>Streamlined hiring process</span> Simplify and automate the
              recruitment workflow, saving time and effort.
            </h1>
          </div>
        </div>
        <div className="feature">
          <div className="feature-head">
            <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <span>Collaborative tools</span> Enable effective communication
              and collaboration among hiring teams.
            </h1>
          </div>
          <div className="feature-img">
            <img src={hiring3} alt="img" data-aos="zoom-in"/>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={hiring4} alt="img" data-aos="zoom-in"/>
          </div>
          <div className="feature-head">
            <h1 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <span>Data-driven insights</span> Gain valuable analytics and
              insights to make informed hiring decisions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
