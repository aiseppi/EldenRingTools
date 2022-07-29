import { randomBytes } from "crypto";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { RuneTypeListInterface } from "../../interfaces";
import { RuneType } from "../RuneType/RuneType";
import { RuneTypeInput } from "../RuneTypeInput/RuneTypeInput";
import theme from "tailwindcss/defaultTheme";

export const RuneTypeListForm = (props: RuneTypeListInterface) => {
  let inputNumb: number;
  const [runeTotal, setRuneTotal] = useState(props.runeTypes);
  // const [totalValue, setTotalValue] = useState<number>();

  function handleQtyChange(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    let value: number = +event.target.value;
    setRuneTotal((rune) =>
      rune?.map((runes, index) =>
        index === id ? { ...runes, runeQty: +value } : runes
      )
    );
  }

  useEffect(() => {
    console.log(runeTotal[1].runeQty);
  }, [runeTotal]);

  let runes = runeTotal.map((rune) => {
    return (
      <li className="mb-2 flex flex-row">
        <div
          className="flex flex-col justify-center items-center border-red rounded-md p-2"
          data-theme="dark"
        >
          <RuneType
            id={rune.id}
            runeType={rune.runeType}
            runeNumber={rune.runeNumber}
            runeValue={rune.runeValue}
            runeTotal={(rune.runeQty ?? 0) * rune.runeValue}
            key={rune.id}
          />
          <div className="flex flex-row">
            <RuneTypeInput
              handleQtyChange={(event) => handleQtyChange(event, rune.id)}
              valueEach={rune.runeValue}
              qty={inputNumb}
              key={`input${rune.id}`}
            />
            <span> x {rune.runeValue}</span>
          </div>
        </div>
        <div className="textColor-olive" key={`${rune.id}Total`}>
          TOTAL: {(rune.runeQty ?? 0) * rune.runeValue}
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{runes}</ul>
    </div>
  );
};
