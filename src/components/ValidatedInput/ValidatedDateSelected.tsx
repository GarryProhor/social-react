import React, {useEffect, useState} from 'react';
import {StyledInputBox, StyledInputLabel} from "./StyledInput";
import {determineValidatedSelectStyle} from "../../utils/determineStylesUtils";
import './ValidatedInput.css';
import {ExpandMoreRounded} from "@mui/icons-material";
interface ValidatedDateSelectedProps{
    style:string;
    valid:boolean;
    name:string;
    dropDown():JSX.Element[];
    dispatcher(name:string, value:string|number|boolean):void;
    data?:number;
}

export const ValidatedDateSelected:React.FC<ValidatedDateSelectedProps> = ({data,style, valid, name, dropDown, dispatcher}) => {
    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [color, setColor] = useState<string>('gray');

    const changeValue = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        console.log('Dispatch this change to o reducer');
        console.log('value: ', e.target.value);
        setValue(+e.target.value);
        dispatcher(name.toLowerCase(), +e.target.value);
    }
    const toggleActive = (e:React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    useEffect(()=>{
        setColor(determineValidatedSelectStyle(active, valid));
    }, [active, valid, value]);

    return (
        <div className='validated-input'>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel active={true} valid={valid} color={color}>
                    {name}
                    <ExpandMoreRounded sx={{
                        fontSize: 34,
                        color: active ? '#1da1f2' : '#657786',
                        position: 'absolute',
                        right: '15px',
                        top: '35%'
                    }}/>
                </StyledInputLabel>
                <select className='validated-input-value validated-date-selector' onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive} value={data}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    );
};

