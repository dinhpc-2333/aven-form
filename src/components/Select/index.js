import React, { memo } from "react";
import Label from "../Label";

import { language } from "../../constants";

const Select = ({ label, placeholder, value, onChange }) => {
  return (
    <>
      <Label label={label} />

      <select
        id={label}
        value={value}
        className="form-item__item select"
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {language.map((item) => (
          <option value={item.name} key={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default memo(Select);
