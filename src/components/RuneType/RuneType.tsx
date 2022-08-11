import React from "react";
import { RuneTypeInterface } from "../../interfaces";

export const RuneType = (props: RuneTypeInterface) => {
  return (
    <div className="text-center" id={props.runeValue.toString()}>
      <div className="m-0 bg-white w-16 rounded-full shadow-lg shadow-cyan-500/50">
        <img
          className="object-cover object-center "
          src={props.imgUrl}
          alt={`Image of ${props.runeType}[${props.runeNumber}]`}
        />
      </div>
      <p className="text-lg">
        {props.runeType} {props.runeNumber ? `Rune[${props.runeNumber}]` : ""}
      </p>
    </div>
  );
};
