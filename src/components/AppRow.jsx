import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import Image from "./Image";
import up from "./../assets/chevron-up.svg";
import axios from "axios";
import host from "../host";

const AppRow = ({ title, query }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {
      setApps(null);
    };
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${host}/${query}`);
      setApps(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const appsToDisplay = isOpen ? apps : apps?.slice(0, 3);

  return (
    <div className="mb-20">
      <div className="w-full flex justify-between items-center mb-8">
        <p className="text-color-text-1 font-bold text-2xl">{title}</p>
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="uppercase cursor-pointer text-sm text-color-text-3 hover:text-color-text-2 font-medium tracking-wider"
        >
          {!isOpen ? "view all" : <Image src={up} />}
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-6 justify-center md:justify-start">
        {appsToDisplay
          ? appsToDisplay.map((app) => <AppCard app={app} key={app.app_id} />)
          : null}
      </div>
    </div>
  );
};

export default AppRow;
