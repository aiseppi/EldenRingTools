import { randomBytes } from "crypto";
import * as React from "react";
import { useState, useEffect } from "react";
import { RuneTypeListInterface } from "../../interfaces";
import { RuneType } from "../RuneType/RuneType";
import { RuneTypeInput } from "../RuneTypeInput/RuneTypeInput";
import { TotalRuneAmount } from "../TotalRuneAmount/TotalRuneAmount";

export const RuneTypeListForm = (props: RuneTypeListInterface) => {
  let inputNumb: number;
  const [runeTotals, setRuneTotals] = useState(props.runeTypes);
  // const [inputValue, setInputValue] = useState(props.runeTypes);

  function getTotal(a: number, b: number): number {
    return a * b;
  }
  function handleQtyChange(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    let value: number = +event.target.value;
    // setTimeout(() => {
    //   setRuneTotals((rune) =>
    //     rune?.map((runes, index) =>
    //       index === id ? { ...runes, runeQty: +value } : runes
    //     )
    //   );
    // }, 100);

    setRuneTotals((rune) =>
      rune?.map((runes, index) =>
        index === id
          ? { ...runes, runeQty: +value, runeTotal: +value * runes.runeValue }
          : runes
      )
    );
  }
  useEffect(() => {
    console.log(runeTotals[1].runeQty);
  }, [runeTotals]);

  let runes = runeTotals.map((rune) => {
    return (
      <li
        className="mb-2 mr-2 justify-space-between card-body shadow-xl bg-base-100"
        key={Math.random()}
      >
        <div className="flex flex-col w-100">
          <RuneType
            id={rune.id}
            runeType={rune.runeType}
            runeNumber={rune.runeNumber}
            runeValue={rune.runeValue}
            runeTotal={(rune.runeQty ?? 0) * rune.runeValue}
            key={rune.id}
            imgUrl={rune.imgUrl}
          />
          <RuneTypeInput
            handleQtyChange={(event) => handleQtyChange(event, rune.id)}
            valueEach={rune.runeValue}
            qty={inputNumb}
            key={`input${rune.id}`}
            value={rune.runeQty}
          />
          {/* <span className="text-lg col-span-2"> x {rune.runeValue}</span> */}
          <div
            className="textColor-olive text-lg col-span-1"
            key={`${rune.id}Total`}
          >
            <div className="badge badge-lg badge-warning">
              + {(rune.runeQty ?? 0) * rune.runeValue}
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="">
      <ul className="grid grid-rows-4 grid-cols-3 gap-1 form-control">
        {runes}
      </ul>
      <TotalRuneAmount runeTypes={runeTotals} />
    </div>
  );
};
