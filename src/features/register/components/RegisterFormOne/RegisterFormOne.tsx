import React from 'react';
import './RegisterFormOne.css';
import {RegisterDateInput} from "../RegisterDateInput/RegisterDateInput";
import {RegisterNameInput} from "../RegisterNameInput/RegisterNameInput";
import {RegisterEmailInput} from "../RegisterEmailInput/RegisterEmailInput";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";

export const RegisterFormOne:React.FC = () => {
    const registerState = useSelector((state:RootState) => state.register);

    return (
        <div className='reg-step-one-container'>
            <div className="reg-step-one-content">
                <h1 className='reg-step-one-header'>Create your account</h1>
                <RegisterNameInput firstName={registerState.firstName} lastName={registerState.lastName}/>
                <RegisterEmailInput email={registerState.email}/>
                <div className='reg-step-one-dob-disclaimer'>
                    <p className='reg-step-one-dob-header'>Date of Birth</p>
                    <span className='reg-step-one-dob-text'>
                        This will not be show publicly. Confirm your own age, even if this account is for a business, pet, or something else.
                    </span>
                </div>
                <RegisterDateInput date={registerState.dob}/>
            </div>
        </div>
    );
};