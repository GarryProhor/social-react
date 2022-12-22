import React, {useState, useEffect} from 'react';
import {StyledInputBox, StyledInputLabel} from "./StyledInput";
import './ValidatedInput.css';

interface ValidatedUserInputProps {
    name: string;
    label: string;
    errorMessage: string;
    validator(value: string): boolean;
    changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
    attributes?:Record<string, string | number | boolean>
}

const ValidatedInput: React.FC<ValidatedUserInputProps> = ({
                                                               name,
                                                               label,
                                                               errorMessage,
                                                               validator,
                                                               attributes,
                                                               changeValue
                                                           }) => {
    return (
        <div className='validated-input'>
            <StyledInputBox active={false} valid={true}>
                <StyledInputLabel active={false} valid={true} color={'gray'}>{label}</StyledInputLabel>
                <input className='validated-input-value'
                       onFocus={()=>{}}
                       onBlur={()=>{}}
                       onChange={()=>{}}
                       {...attributes}
                />
            </StyledInputBox>
            <span>{errorMessage}</span>
        </div>
    );
};

export default ValidatedInput;