import React, { useEffect } from "react";
import Button from "./Button";
import Image from "./Image";
import Rating from "./Rating";
import { useState } from "react";
import down from "./../assets/chevron-down.svg";
import up from "./../assets/chevron-up.svg";
import { useRoute } from "wouter";
import axios from "axios";
import host from "../host";

const Heading = ({ children }) => (
  <h1 className="text-4xl font-bold text-color-text-1 leading-snug">
    {children}
  </h1>
);

const Label = ({ children }) => (
  <p className="text-color-text-3 uppercase text-sm font-bold">{children}</p>
);

const Trailer = ({ link }) => (
  <div>
    <iframe
      className="shadow-sm shadow-color-header-bg rounded-sm"
      width="360"
      height="240"
      src={link}
    ></iframe>
  </div>
);

const Screenshots = ({ photos }) => {
  const photosArr = photos.split("*");
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-semibold text-color-text-1">Screenshots</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {photosArr.map((photo, i) => (
          <Image
            className="mt-4 object-cover rounded-sm max-w-xs"
            src={photo}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

const Description = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mt-14 text-color-text-3 text-lg">
      <p className={`text-left mb-6 ${!isOpen && "line-clamp-5"}`}>
        {children}
      </p>

      <p
        onClick={(e) => {
          setOpen(!isOpen);
        }}
        className="uppercase text-center cursor-pointer hover:text-color-text-2 inline-flex w-full justify-center gap-2"
      >
        {isOpen ? "" : "READ MORE"}
        <Image src={isOpen ? up : down} />
      </p>
    </div>
  );
};

const AppPage = ({}) => {
  const [app, setApp] = useState(null);
  const [match, params] = useRoute("/app/:id");

  const appID = params.id.replaceAll("%20", ".");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${host}/${"apps"}?app_id=${appID}`);
      setApp(res?.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();

    return () => setApp(null);
  }, []);

  if (!app) return <div></div>;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-wrap justify-center md:justify-between items-end pt-16 gap-20 w-full">
        <div className="flex flex-col items-center md:items-baseline gap-6 text-center md:text-left max-w-md">
          <Heading>{app.name}</Heading>
          <div className="flex flex-wrap items-center gap-12">
            <div className="flex flex-col gap-6">
              <Image className="h-16 w-16" src={app.image_url} />
              <Label>{app.company}</Label>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-16 flex items-center">
                <Rating rating={+app.rating} />
              </div>
              <Label>{app.category}</Label>
            </div>
          </div>
          <Button>
            <a target="_blank" href="https://bluestacks.com/apps">
              Download For PC
            </a>
          </Button>
        </div>
        {app.trailer_url !== "None" && <Trailer link={app.trailer_url} />}
      </div>
      <Screenshots photos={app.screenshots} />
      <Description>{app.description}</Description>
    </div>
  );
};

export default AppPage;
