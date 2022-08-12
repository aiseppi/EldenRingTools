import { RuneTypeListInterface } from "../../interfaces";

export const TotalRuneAmount = (props: RuneTypeListInterface) => {
  let total = props.runeTypes?.reduce((accumulator: number, runeVal) => {
    return accumulator + (runeVal.runeTotal ?? 0);
  }, 0);
  return (
    <div className="stats shadow absolute top-0 right-0">
      <div className="stat">
        <div className="stat-title">Total Runes:</div>
        <div className="stat-value text-warning">{total}</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
};
