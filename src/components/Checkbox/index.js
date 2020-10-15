import React, { PureComponent } from "react";

class Checkbox extends PureComponent {
  render() {
    const { children, label, value, onChange, name } = this.props;
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
  }
}

export default Checkbox;
