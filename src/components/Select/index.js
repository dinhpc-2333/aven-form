import React, { PureComponent } from "react";
import Label from "../Label";

import { language } from "../../constants";

class Select extends PureComponent {
  render() {
    const { label, placeholder, value, onChange } = this.props;
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
  }
}

export default Select;
