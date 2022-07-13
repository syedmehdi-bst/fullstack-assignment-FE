import React from "react";

const Button = ({ children }) => {
  return (
    <div className="h-11 px-10 bg-bst-green text-white text-lg font-bold cursor-pointer inline-flex items-center hover:bg-bst-green-hover select-none">
      {children}
    </div>
  );
};

export default Button;
