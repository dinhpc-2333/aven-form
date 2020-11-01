import React, { memo } from "react";
import Label from "../Label";

const InnerInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
  innerRef,
}) => {
  return (
    <>
      <Label id={id} label={label} required={required} />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-item__item text-input"
        ref={innerRef}
      />

      {error && <p className="form-item__error">{error}</p>}
    </>
  );
};

const Input = React.forwardRef((props, ref) => (
  <InnerInput innerRef={ref} {...props} />
));

export default memo(Input);
