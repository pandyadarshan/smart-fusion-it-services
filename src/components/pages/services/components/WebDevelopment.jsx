import React from "react";

const WebDevelopment = () => {
  return (
    <div className="service-inner-container">
      <div className="img-sec">
        {/* <img src="https://i.pinimg.com/originals/b9/e4/96/b9e4960c1476c78043d499d975f86cdb.gif" /> */}
        <img
          src={require("../../../../assets/skills/gifs/webdevelopment.gif")}
          alt="web development"
        />
      </div>
      <div className="common-header">Web Development</div>
      <p className="intro-para">
        Crafting exceptional web experiences is our passion and expertise. As
        seasoned web developers, we thrive on turning concepts into captivating
        digital realities. With a keen eye for design and a commitment to
        cutting-edge technologies, we specialize in creating responsive,
        user-friendly websites that leave a lasting impression. Whether it's
        building dynamic web applications or designing sleek, modern interfaces,
        we prioritize both functionality and aesthetics to ensure a seamless
        user experience. <br />
        <br />
        <br />
        Let our portfolio showcase the diverse range of projects we've
        undertaken, each one a testament to our dedication to excellence in web
        development.
      </p>
      <div className="tech-stack">
        <div className="common-sub-header">Technology Stack</div>
      </div>
    </div>
  );
};

export default WebDevelopment;
