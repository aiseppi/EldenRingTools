import { InputPropsInterface } from "../../interfaces";

export const RuneTypeInput = (props: InputPropsInterface) => {
  return (
    <div className="w-100 flex justify-center items-center form-control bg-transparent">
      <label className="input-group justify-center my-1">
        <span className="px-[0.25rem]">QTY</span>
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
