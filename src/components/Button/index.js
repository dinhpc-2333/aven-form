import React, { memo } from "react";

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className="button">
      {children}
    </button>
  );
};

export default memo(Button);
