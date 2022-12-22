import React, {useEffect, useState} from 'react';
import './RegisterFormOne.css';
import {TextInput} from "../../../../components/TextInput/TextInput";
import ValidatedInput from "../../../../components/ValidatedInput/ValidatedInput";

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
                <ValidatedInput name={"firstName"}
                                label={"First"}
                                errorMessage={"Whats your name?"}
                                validator={()=>true}
                                changeValue={updateUser}/>
                <ValidatedInput name={"lastName"}
                                label={"Last"}
                                errorMessage={"Whats your name?"}
                                validator={()=>true}
                                changeValue={updateUser}/>
                <ValidatedInput name={"email"}
                                label={"Email"}
                                errorMessage={"Enter a valid email"}
                                validator={()=>true}
                                changeValue={updateUser}/>
            </div>
        </div>
    );
};