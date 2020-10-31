import React from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/info-form">Information Form</Link>
        </li>

        <li className="nav-item">
          <Link to="/marriage-form">Marriage Form</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
