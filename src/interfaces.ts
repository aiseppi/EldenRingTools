import React from "react";

export interface RuneTypeInterface {
  id: number;
  runeType: string;
  runeNumber?: number;
  runeValue: number;
  runeQty?: number;
  runeTotal?: number;
  imgUrl: string;
}

export interface RuneTypeListInterface {
  runeTypes?: RuneTypeInterface[];
  handleRunesListUpdate?: (runes: RuneTypeInterface[]) => void;
}

export interface InputPropsInterface {
  ref?: React.ForwardedRef<HTMLInputElement>;
  handleQtyChange: React.ChangeEventHandler<HTMLInputElement>;
  qty?: number | null;
  valueEach?: number | null;
  value?: number;
}
