import React, { PureComponent } from "react";

class Radio extends PureComponent {
  render() {
    const { children, label, name, onChange, value } = this.props;
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
  }
}

export default Radio;
