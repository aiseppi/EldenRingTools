import React from "react";
import { useState } from "react";
import { RuneTypeInterface } from "../../interfaces";
import { RuneTypeListForm } from "../RuneTypeListForm/RuneTypeListForm";

const runeList: RuneTypeInterface[] = [
  {
    id: 0,
    runeType: "Golden",
    runeNumber: 1,
    runeValue: 200,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/943/golden_rune_1.png"
  },
  {
    id: 1,
    runeType: "Golden",
    runeNumber: 2,
    runeValue: 400,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/944/golden_rune_2.png"
  },
  {
    id: 2,
    runeType: "Golden",
    runeNumber: 3,
    runeValue: 800,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/945/golden_rune_3.png"
  },
  {
    id: 3,
    runeType: "Golden",
    runeNumber: 4,
    runeValue: 1200,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/946/golden_rune_4a.png"
  },
  {
    id: 4,
    runeType: "Golden",
    runeNumber: 5,
    runeValue: 1600,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/947/golden_rune_5.png"
  },
  {
    id: 5,
    runeType: "Golden",
    runeNumber: 6,
    runeValue: 2000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/948/golden_rune_6.png"
  },
  {
    id: 6,
    runeType: "Golden",
    runeNumber: 7,
    runeValue: 2500,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/949/golden_rune_7.png"
  },
  {
    id: 7,
    runeType: "Golden",
    runeNumber: 8,
    runeValue: 3000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/993/golden_rune_8.png"
  },
  {
    id: 8,
    runeType: "Golden",
    runeNumber: 9,
    runeValue: 3800,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/951/golden_rune_9.png"
  },
  {
    id: 9,
    runeType: "Golden",
    runeNumber: 10,
    runeValue: 5000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/952/golden_rune_10.png"
  },
  {
    id: 10,
    runeType: "Golden",
    runeNumber: 11,
    runeValue: 6250,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2897/golden_rune_11.png"
  },
  {
    id: 11,
    runeType: "Golden",
    runeNumber: 12,
    runeValue: 7500,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2898/golden_rune_12.png"
  },
  {
    id: 12,
    runeType: "Golden",
    runeNumber: 13,
    runeValue: 10000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2899/golden_rune_13.png"
  },
  {
    id: 13,
    runeType: "Numen's",
    runeValue: 12500,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2900/numens_rune.png"
  },
  {
    id: 14,
    runeType: "Hero's",
    runeNumber: 1,
    runeValue: 15000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2901/heros_rune_1.png"
  },
  {
    id: 15,
    runeType: "Hero's",
    runeNumber: 2,
    runeValue: 20000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2902/heros_rune_2.png"
  },
  {
    id: 16,
    runeType: "Hero's",
    runeNumber: 3,
    runeValue: 25000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2903/heros_rune_3.png"
  },
  {
    id: 17,
    runeType: "Hero's",
    runeNumber: 4,
    runeValue: 30000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2904/heros_rune_4.png"
  },
  {
    id: 18,
    runeType: "Hero's",
    runeNumber: 5,
    runeValue: 35000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2905/heros_rune_5.png"
  },
  {
    id: 19,
    runeType: "Lord's",
    runeValue: 50000,
    imgUrl:
      "https://www.gamerguides.com/assets/media/resize256x-/14/2906/lords_rune.png"
  }
];
export const RuneCalculator = () => {
  // const [runeTypes, setRuneTypes] = useState<RuneTypeInterface[]>([])
  return (
    <div className="w-1/3 bg-gray-100">
      <RuneTypeListForm runeTypes={runeList}></RuneTypeListForm>
    </div>
  );
};
