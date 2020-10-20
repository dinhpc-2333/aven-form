import React, { memo } from "react";
import Label from "../Label";

const Textarea = ({ label, row, placeholder, value, onChange }) => {

  return (
    <>
      <Label label={label} />
      <textarea
        id={label}
        rows={row}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-item__item text-input"
      />
    </>
  );
};

export default memo(Textarea);
