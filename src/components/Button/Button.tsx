import "./Button.css";

import React, { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="myButton">
      {children}
    </div>
  );
};

export default Button;
