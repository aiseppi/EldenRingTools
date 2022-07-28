import React from "react";
import { useState } from "react";
import { RuneTypeInterface } from "../../interfaces";
import { RuneTypeListForm } from "../RuneTypeListForm/RuneTypeListForm";

const runeList: RuneTypeInterface[] = [
  { id: 0, runeType: "Golden", runeNumber: 1, runeValue: 200 },
  { id: 1, runeType: "Golden", runeNumber: 2, runeValue: 400 },
  { id: 2, runeType: "Golden", runeNumber: 3, runeValue: 800 },
  { id: 3, runeType: "Golden", runeNumber: 4, runeValue: 1200 },
  { id: 4, runeType: "Golden", runeNumber: 5, runeValue: 1600 },
  { id: 5, runeType: "Golden", runeNumber: 6, runeValue: 2000 },
  { id: 6, runeType: "Golden", runeNumber: 7, runeValue: 2500 },
  { id: 7, runeType: "Golden", runeNumber: 8, runeValue: 3000 },
  { id: 8, runeType: "Golden", runeNumber: 9, runeValue: 3800 },
  { id: 9, runeType: "Golden", runeNumber: 10, runeValue: 5000 },
  { id: 10, runeType: "Golden", runeNumber: 11, runeValue: 6250 },
  { id: 11, runeType: "Golden", runeNumber: 12, runeValue: 7500 },
  { id: 12, runeType: "Golden", runeNumber: 13, runeValue: 10000 },
  { id: 13, runeType: "Numen's", runeValue: 12500 },
  { id: 14, runeType: "Hero's", runeNumber: 1, runeValue: 15000 },
  { id: 15, runeType: "Hero's", runeNumber: 2, runeValue: 20000 },
  { id: 16, runeType: "Hero's", runeNumber: 3, runeValue: 25000 },
  { id: 17, runeType: "Hero's", runeNumber: 4, runeValue: 30000 },
  { id: 18, runeType: "Hero's", runeNumber: 5, runeValue: 35000 },
  { id: 19, runeType: "Lord's", runeValue: 50000 }
];
export const RuneCalculator = () => {
  // const [runeTypes, setRuneTypes] = useState<RuneTypeInterface[]>([])
  return <RuneTypeListForm runeTypes={runeList}></RuneTypeListForm>;
};
