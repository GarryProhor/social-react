import React, {useEffect, useState} from 'react';
import './RegisterFormOne.css';
import {RegisterDateInput} from "../RegisterDateInput/RegisterDateInput";
import {RegisterNameInput} from "../RegisterNameInput/RegisterNameInput";
import {RegisterEmailInput} from "../RegisterEmailInput/RegisterEmailInput";

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
                <RegisterEmailInput />
                <RegisterDateInput/>
            </div>
        </div>
    );
};