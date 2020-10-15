import React, { PureComponent } from "react";
import Label from "../Label";

class Input extends PureComponent {
  render() {
    const {
      label,
      type,
      placeholder,
      value,
      onChange,
      required,
      error,
      innerRef,
    } = this.props;
    return (
      <>
        <Label label={label} required={required} />
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-item__item text-input"
          ref={innerRef}
        />

        {error && <p className="form-item__error">{error}</p>}
      </>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
));
