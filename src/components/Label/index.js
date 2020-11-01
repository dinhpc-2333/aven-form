import React, { memo } from "react";
import { mappingLabel } from "../../constants";

const Label = ({ label, id, required }) => {
  return (
    <label
      htmlFor={id}
      className={`form-item__label ${required ? "required" : ""}`}
    >
      {mappingLabel[label] || label}
    </label>
  );
};

export default memo(Label);
