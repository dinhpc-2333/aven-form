import React, { memo } from "react";

const Radio = ({ children, label, name, onChange, value }) => {
  return (
    <div className="form-item__inline-item">
      <input
        type="radio"
        id={label}
        name={name}
        onChange={onChange}
        value={value}
        checked={value === label}
      />
      <label htmlFor={label} className="form-item__inline-item--label">
        {children}
      </label>
    </div>
  );
};

export default memo(Radio);
