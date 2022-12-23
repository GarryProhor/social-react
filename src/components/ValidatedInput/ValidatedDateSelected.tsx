import React, {useState} from 'react';
import {StyledInputBox, StyledInputLabel} from "./StyledInput";

interface ValidatedDateSelectedProps{
    style:string;
    valid:boolean;
    name:string;
    dropDown():JSX.Element[]
}

export const ValidatedDateSelected:React.FC<ValidatedDateSelectedProps> = ({style, valid, name, dropDown}) => {
    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);

    const changeValue = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        console.log('Dispatch this change to o reducer');
        console.log('value: ', e.target.value);
        setValue(+e.target.value);
    }
    const toggleActive = (e:React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel active={true} valid={valid} color='gray'>
                    {name}
                </StyledInputLabel>
                <select onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    );
};

