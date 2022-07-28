import { forwardRef } from "react";
import { RuneTypeInterface, InputPropsInterface } from "../../interfaces";

export const RuneTypeInput = (props: InputPropsInterface) => {
  // console.log(props.qty)
  return (
    <div>
      <input type="text" placeholder="Qty" onChange={props.handleQtyChange} />
      {/* <span>Total: {}</span> */}
    </div>
  );
};
