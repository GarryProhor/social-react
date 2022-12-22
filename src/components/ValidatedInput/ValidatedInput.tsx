import React, {useState, useEffect} from 'react';
import {ValidatedInputState} from "../../utils/GlobalInterfaces";
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
    const [validatedState, setValidatedState]  = useState<ValidatedInputState>({
        active: false,
        valid: true,
        typeIn: false,
        labelActive: false,
        labelColor: "gray",
        value: ''
    });
    const focus = (e:React.FocusEvent<HTMLInputElement>):void=>{
        setValidatedState({
            ...validatedState,
            active: !validatedState?.active
        });
    }
    const updateValue = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setValidatedState({
            ...validatedState,
            typeIn: true,
            value: e.target.value
        });
        changeValue(e);
    }
    return (
        <div className='validated-input'>
            <StyledInputBox active={validatedState.active} valid={validatedState.valid}>
                <StyledInputLabel active={validatedState.labelActive}
                                  valid={validatedState.valid}
                                  color={validatedState.labelColor}>
                    {label}
                </StyledInputLabel>
                <input className='validated-input-value'
                       onFocus={focus}
                       onBlur={focus}
                       onChange={updateValue}
                       {...attributes}
                />
            </StyledInputBox>
            <span>{errorMessage}</span>
        </div>
    );
};

export default ValidatedInput;