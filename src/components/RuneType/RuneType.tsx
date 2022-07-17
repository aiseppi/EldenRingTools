import React from 'react';
import { RuneTypeInterface } from '../../interfaces';

export const RuneType = (props: RuneTypeInterface) => {

    return(
        <div className="rune-type-item" id={props.runeValue.toString()}>
            <li>{props.runeType} {props.runeNumber ? `Rune[${props.runeNumber}]`:''} ({props.runeValue} each) </li>
        </div>
    )
}
