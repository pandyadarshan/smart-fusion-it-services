import React from "react";

const index = ({ label, children, ...rest }) => {
  return (
    <button className="common-primary-button" {...rest}>
      {children || label || "Button"}
    </button>
  );
};

export default index;
