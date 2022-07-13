import React from "react";
import { Link } from "wouter";
import Image from "./Image";

const AppCard = ({ app }) => {
  const id = app.app_id.replaceAll(".", " ");

  return (
    <Link to={`/app/${id}`}>
      <div className="basis-80 flex p-6 gap-4 rounded-md shadow-md cursor-pointer bg-white hover:-translate-y-0.5 hover:shadow-slate-300">
        <Image src={app.image_url} className="rounded-sm" />
        <div className="flex flex-col justify-between gap-1">
          <p className="text-color-text-1 font-bold text-lg leading-tight line-clamp-2">
            {app.name}
          </p>
          <p className="text-color-text-3 font-normal text-base leading-none line-clamp-1">
            {app.company}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
