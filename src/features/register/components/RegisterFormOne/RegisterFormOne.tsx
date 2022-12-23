import React, {useEffect, useState} from 'react';
import './RegisterFormOne.css';
import {validateName} from "../../../../services/Validators";
import ValidatedInput from "../../../../components/ValidatedInput/ValidatedInput";
import {RegisterDateInput} from "../RegisterDateInput/RegisterDateInput";
import {RegisterNameInput} from "../RegisterNameInput/RegisterNameInput";

interface FormOneState {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}

export const RegisterFormOne: React.FC = () => {
    const [stepOneState, setStepOneState] = useState<FormOneState>({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: ""
    })

    const updateUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setStepOneState({...stepOneState, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        console.log("state change", stepOneState);
    }, [stepOneState])
    return (
        <div className='reg-step-one-container'>
            <div className="reg-step-one-content">
                <RegisterNameInput />
                <ValidatedInput name={"email"}
                                label={"Email"}
                                errorMessage={"Enter a valid email"}
                                validator={()=>true}
                                changeValue={updateUser}/>
                <RegisterDateInput/>
            </div>
        </div>
    );
};