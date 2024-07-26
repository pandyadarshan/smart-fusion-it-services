import React from "react";
import Services from "./components/Services.jsx";
import MiddleBanner from "./components/MiddleBanner.jsx";
import Skills from "./components/Skills.jsx";

const Home = () => {
  return (
    <>
      <div class="main-banner position-relative">
        <div class="banner-text container">
          <div class="display-6">Smart Fusion IT Services</div>
          <div class="sub-para my-4">
            We are a team of software engineers, always striving to explore and
            discover new things that will make us unique. We don't adhere to the
            concept of being a "Full Stack." Instead, we specialize in "One
            Stack" with a team of experts dedicated to it.
          </div>
          <div>How can we help you?</div>
        </div>
      </div>
      <Services />
      <MiddleBanner />
      <Skills />
    </>
  );
};

export default Home;
