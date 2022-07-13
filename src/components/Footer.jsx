import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center font-mono py-6 mt-16 bg-slate-200 text-color-text-2 selection:bg-lime-100">
      <p>
        Made by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:text-color-text-1"
          href="https://github.com/syedmehdi-bst"
        >
          Mehdi
        </a>
      </p>
    </div>
  );
};

export default Footer;
