import React, { PureComponent } from "react";
import Label from "../Label";

class Textarea extends PureComponent {
  render() {
    const { label, row, placeholder, value, onChange } = this.props;
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
  }
}

export default Textarea;
