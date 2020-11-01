import React, { memo } from "react";
import Label from "../Label";

const Textarea = ({ label, id, row, placeholder, value, onChange }) => {
  return (
    <>
      <Label id={id} label={label} />
      <textarea
        id={id}
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
