import React from 'react';
import {ValidatedDisplay} from "../../../../components/ValidatedInput/ValidatedDisplay";
import {stringifyDate} from "../../utils/DateUtinls";
import './RegisterFormThree.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {StyledNextButton} from "../RegisterNextButton/RegisterNextButton";

export const RegisterFormThree: React.FC = () => {
    const state = useSelector((state: RootState) => state.register);
    return (
        <div className='reg-step-three-container'>
            <div className='reg-step-three-content'>
                <h1 className='reg-step-three-header'>Create your account</h1>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`}/>
                </div>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={'Email'} value={state.email}/>
                </div>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={'Birth day'} value={stringifyDate(state.dob)}/>
                </div>
                <p className='reg-step-three-policy'>
                    By signing up you agree <span className='reg-step-three-link'>Terms of Services</span> and <span
                    className='reg-step-three-link'>Privacy Policy</span>, including <span
                    className='reg-step-three-link'>Cookie use</span>. Social may use your contact information,
                    including your email address and phone number for purposes outlined in out Privacy Policy, like
                    keeping your account secure and personalizing our services including ads. <span
                    className='reg-step-three-link'>Learn more</span>. Others will be able to find you by email or phone
                    number, when provided unless you choose otherwise <span className='reg-step-three-link'>here</span>.
                </p>
            </div>
            <StyledNextButton active={true} color={'blue'} onClick={()=>alert('singing up')}>Sing Up</StyledNextButton>
        </div>
    );
};