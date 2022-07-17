import React from 'react';
import { useState } from 'react';
import { RuneTypeInterface } from '../../interfaces';
import { RuneTypeListForm } from '../RuneTypeListForm/RuneTypeListForm';
 
const runeList: RuneTypeInterface[] = [
    {runeType: "Golden", runeNumber: 1, runeValue:200 },
    {runeType: "Golden", runeNumber: 2, runeValue: 400},
    {runeType: "Golden", runeNumber: 3, runeValue:800 },
    {runeType: "Golden", runeNumber: 4, runeValue:1200 },
    {runeType: "Golden", runeNumber: 5, runeValue: 1600},
    {runeType: "Golden", runeNumber: 6, runeValue:2000 },
    {runeType: "Golden", runeNumber: 7, runeValue:2500 },
    {runeType: "Golden", runeNumber: 8, runeValue: 3000},
    {runeType: "Golden", runeNumber: 9, runeValue: 3800},
    {runeType: "Golden", runeNumber: 10, runeValue:5000 },
    {runeType: "Golden", runeNumber: 11, runeValue: 6250},
    {runeType: "Golden", runeNumber: 12, runeValue:7500 },
    {runeType: "Golden", runeNumber: 13, runeValue: 10000},
    {runeType: "Numen's", runeValue: 12500 },
    {runeType: "Hero's", runeNumber: 1, runeValue: 15000},
    {runeType: "Hero's", runeNumber: 2, runeValue: 20000},
    {runeType: "Hero's", runeNumber: 3, runeValue: 25000},
    {runeType: "Hero's", runeNumber: 4, runeValue: 30000},
    {runeType: "Hero's", runeNumber: 5, runeValue: 35000},
    {runeType: "Lord's", runeValue: 50000}
]
export const RuneCalculator =()=> {
    // const [runeTypes, setRuneTypes] = useState<RuneTypeInterface[]>([])
    return (
        <RuneTypeListForm runeTypes={runeList}></RuneTypeListForm>
    )
}