import React, { PureComponent } from "react";

class Button extends PureComponent {
  render() {
    const { children, onClick, type } = this.props;
    return (
      <button onClick={onClick} type={type} className="button">
        {children}
      </button>
    );
  }
}

export default Button;
