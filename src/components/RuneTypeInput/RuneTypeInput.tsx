import { forwardRef } from "react";
import { RuneTypeInterface, InputPropsInterface } from "../../interfaces";

export const RuneTypeInput = (props: InputPropsInterface) => {
  // console.log(props.qty)
  return (
    <div>
      <input
        className="w-16 border border-black"
        type="text"
        placeholder="Qty"
        onChange={props.handleQtyChange}
      />
      {/* <span>Total: {}</span> */}
    </div>
  );
};
