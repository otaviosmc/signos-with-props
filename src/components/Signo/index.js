import React from "react";

export default function Signo(props) {
  return (
    <div className="font-bold text-white bg-yellow-800 px-1 py-4 rounded-xl flex flex-col gap-2">
      <h2>{props.signo}</h2>
      <img className="w-64" src={props.img} alt="Signo" />
      <p>
        {props.datai} - {props.dataf}
      </p>
    </div>
  );
}
