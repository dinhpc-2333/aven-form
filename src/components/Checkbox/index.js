import React, { memo } from "react";

const Checkbox = ({ children, label, value, onChange, name }) => {
  return (
    <div className="form-item__inline-item">
      <input
        type="checkbox"
        id={label}
        name={name}
        checked={value}
        onChange={onChange}
        className="form-item__inline-item--input"
      />
      <label htmlFor={label} className="form-item__inline-item--label">
        {children}
      </label>
    </div>
  );
};

export default memo(Checkbox);
