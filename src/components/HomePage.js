import React from "react";

import About from "./About";
import Features from "./Features";
import Parallax from "./Parallax";
import Header from "./Header";
import Footer from "./Footer";
import Success from "./Success";

const HomePage = () => {
  return (
    <div>
      <Header content="Get Started" route="/login" add=""/>
      <Parallax />
      <About />
      <Features />
      <Success/>
      <Footer/>
    </div>
  );
};

export default HomePage;
