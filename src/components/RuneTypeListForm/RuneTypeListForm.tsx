import { randomBytes } from "crypto";
import * as React from "react";
import { useState, useEffect } from "react";
import { RuneTypeInterface, RuneTypeListInterface } from "../../interfaces";
import { RuneType } from "../RuneType/RuneType";
import { RuneTypeInput } from "../RuneTypeInput/RuneTypeInput";
import { TotalRuneAmount } from "../TotalRuneAmount/TotalRuneAmount";

export const RuneTypeListForm = (props: RuneTypeListInterface) => {
  let inputNumb: number;
  const [runeTotals, setRuneTotals] = useState<RuneTypeInterface[]>(
    props.runeTypes!
  );

  function handleQtyChange(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    let value: number = +event.target.value;

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
    props.handleRunesListUpdate!(runeTotals);
  }, [runeTotals]);

  let runes = runeTotals.map((rune) => {
    return (
      // outline outline-double outline-3 outline-offset-2 outline-amber-300
      <li
        className="mb-2 mr-2 card-body shadow-lg bg-base-100 p-[0.5rem] rounded"
        key={Math.random()}
      >
        <div className="flex flex-col justify-center items-center w-100	backdrop-opacity-10">
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
    <ul className="grid grid-rows-4 grid-cols-3 gap-1 form-control">{runes}</ul>
  );
};
