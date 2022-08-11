import { InputPropsInterface } from "../../interfaces";

export const RuneTypeInput = (props: InputPropsInterface) => {
  return (
    <div className="">
      <label className="input-group">
        <span>Qty</span>
        <input
          className="input input-bordered w-1/3 input-xs"
          type="number"
          min="0"
          step="1"
          onChange={props.handleQtyChange}
          value={props.value}
        />
      </label>
    </div>
  );
};
