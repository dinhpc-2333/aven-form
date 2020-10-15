import React from "react";
import { mappingLabel } from "../../constants";

const Label = ({ label, required }) => {
  return (
    <label
      htmlFor={label}
      className={`form-item__label ${required ? "required" : ""}`}
    >
      {mappingLabel[label]}
    </label>
  );
};

export default Label;
