import * as React from 'react';
import { useState, useRef } from 'react';
import { RuneTypeListInterface } from '../../interfaces';
import { RuneType } from '../RuneType/RuneType';

export const RuneTypeListForm = (props: RuneTypeListInterface) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [totalValue, setTotalValue] = useState<number>();

    function handleQtyChange(event: React.ChangeEvent<HTMLInputElement>, rValue: number){
        let inputNumb = event.target.value;
        console.log(inputNumb);
        console.log(rValue)
        let newVal = +inputNumb * rValue;
        setTotalValue(newVal)
    }
return(
    <div>
        <ul>
            {props.runeTypes.map((rune)=>(
                <div> 
                <RuneType runeType={rune.runeType} runeNumber={rune.runeNumber} runeValue={rune.runeValue}/>
                <input type="text" placeholder='Qty' ref={inputRef} onChange={event => handleQtyChange(event, rune.runeValue)} />
                <span data-value={totalValue}>Total: {totalValue}</span>
                </div>                                                                   
            ))}
        </ul>
    </div>
)
}

