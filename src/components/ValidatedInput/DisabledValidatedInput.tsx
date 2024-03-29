import React from 'react';
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import './ValidatedInput.css'
interface DisabledValidatedInputProps{
    label:string,
    value:string,
}
export const DisabledValidatedInput:React.FC<DisabledValidatedInputProps> = ({label, value}) => {
    return (
        <div className='disabled-validated-input'>
            <StyledInputBox active={false} valid={true}>
                <StyledInputLabel active={true} valid={true} color={'gray'}>
                    {label}
                </StyledInputLabel>
                <input className="validated-input-value validated-input-text-transparent" value={value} disabled/>
            </StyledInputBox>
        </div>
    );
};

