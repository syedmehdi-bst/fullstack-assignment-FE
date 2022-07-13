import React from "react";
import logo from "./../assets/bluestacks.png";
import repeat from "./../assets/repeat.svg";
import Image from "./Image";
import { Link } from "wouter";

const Header = () => {
  return (
    <div className="fixed h-20 w-full bg-color-header-bg text-white z-10">
      <div className="max-w-5xl w-full h-full mx-auto flex items-center justify-between px-3">
        <Link to="/">
          <Image className="cursor-pointer" src={logo} alt="logo" />
        </Link>
        <div className="rounded-full w-11 h-11 hover:bg-color-text-1 flex justify-center items-center cursor-pointer">
          <Image src={repeat} />
        </div>
      </div>
    </div>
  );
};

export default Header;
