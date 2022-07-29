import { InputPropsInterface } from "../../interfaces";

export const RuneTypeInput = (props: InputPropsInterface) => {
  return (
    <div>
      <input
        className="text-center w-16 mr-2 input input-bordered max-w-xs"
        type="text"
        placeholder="Qty"
        onChange={props.handleQtyChange}
      />
    </div>
  );
};
