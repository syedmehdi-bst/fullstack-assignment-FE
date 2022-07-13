import React from "react";
import { useLocation } from "wouter";

function Fallback() {
  const [location, setLocation] = useLocation();

  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-color-text-1 font-mono mb-10">
        Oops! Seems like you're on a wrong page
      </h1>
      <button
        onClick={() => {
          setLocation("/");
        }}
        className="px-6 py-3 text-xl font-semibold bg-bst-green text-white hover:bg-bst-green-hover"
      >
        Go to Home
      </button>
    </div>
  );
}

export default Fallback;
