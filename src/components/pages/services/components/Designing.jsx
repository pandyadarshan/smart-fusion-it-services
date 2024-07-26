import React from "react";

const Designing = () => {
  return (
    // <div>
    //   <img src="https://i.pinimg.com/originals/32/9b/63/329b63886c58f6f4915b8642f52ec8b3.gif" />
    // </div>
    <div className="service-inner-container">
      <div className="img-sec">
        {/* <img src="https://i.pinimg.com/originals/32/9b/63/329b63886c58f6f4915b8642f52ec8b3.gif" /> */}
        <img
          src={require("../../../../assets/skills/gifs/desigining.gif")}
          alt="designing"
        />
      </div>
      <div className="common-header">Designing(UI/UX)</div>
      <p className="intro-para">
        In the realm of UI/UX design, we specialize in creating immersive
        digital experiences that seamlessly blend form and function. With a keen
        eye for aesthetics and a deep understanding of user psychology, we craft
        intuitive interfaces that delight users and drive engagement. From
        wireframing and prototyping to visual design and user testing, we employ
        a holistic approach to design that prioritizes user needs and business
        objectives. Our goal is to create interfaces that not only look stunning
        but also provide a seamless and enjoyable user journey. By conducting
        thorough research and iteration, we ensure that every design decision is
        backed by data and insights, resulting in interfaces that are both
        visually stunning and highly effective.
        <br />
        <br />
        <br />
        Let us bring your digital vision to life with our expertise in UI/UX
        design, elevating your brand and enhancing user satisfaction in the
        digital landscape.
      </p>
      <div className="tech-stack">
        <div className="common-sub-header">Technology Stack</div>
      </div>
    </div>
  );
};

export default Designing;
