import { randomBytes } from "crypto";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { RuneTypeListInterface } from "../../interfaces";
import { RuneType } from "../RuneType/RuneType";
import { RuneTypeInput } from "../RuneTypeInput/RuneTypeInput";

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
      <li className="rune-list-item">
        <RuneType
          id={rune.id}
          runeType={rune.runeType}
          runeNumber={rune.runeNumber}
          runeValue={rune.runeValue}
          runeTotal={(rune.runeQty ?? 0) * rune.runeValue}
          key={rune.id}
        />
        <div className="flex-col">
          <RuneTypeInput
            handleQtyChange={(event) => handleQtyChange(event, rune.id)}
            valueEach={rune.runeValue}
            qty={inputNumb}
            key={`input${rune.id}`}
          />
          <span className="colors.beige" key={`${rune.id}Total`}>
            TOTAL: {(rune.runeQty ?? 0) * rune.runeValue}
          </span>
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
