import React, { memo } from "react";
import { mappingLabel } from "../../constants";

const Label = ({ label, required }) => {
  return (
    <label
      htmlFor={label}
      className={`form-item__label ${required ? "required" : ""}`}
    >
      {mappingLabel[label] || label}
    </label>
  );
};

export default memo(Label);
