import React from "react";
import { RuneTypeInterface } from "../../interfaces";

export const RuneType = (props: RuneTypeInterface) => {
  function setScale(): string {
    let scale =
      props.runeType === "Golden" && props.runeNumber! <= 5
        ? "scale-[1.75]"
        : "scale-[1.25]";
    return scale;
  }

  return (
    <div className="text-center" id={props.runeValue.toString()}>
      <div className="m-0 bg-white w-12 rounded-full shadow-lg shadow-cyan-500/50 inline-block">
        <img
          className={`object-fill object-center mask mask-circle ${setScale()}`}
          src={props.imgUrl}
          alt={`Visual of ${props.runeType}[${props.runeNumber}]`}
        />
      </div>
      <p className="text-lg">
        {props.runeType} {props.runeNumber ? `Rune [${props.runeNumber}]` : ""}
      </p>
    </div>
  );
};
