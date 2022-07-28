import React from "react";
import { RuneTypeInterface } from "../../interfaces";

export const RuneType = (props: RuneTypeInterface) => {
  return (
    <div className="text-center text-1xl" id={props.runeValue.toString()}>
      {props.runeType} {props.runeNumber ? `Rune[${props.runeNumber}]` : ""} (
      {props.runeValue} each)
    </div>
  );
};
