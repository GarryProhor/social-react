import React, {useEffect, useState} from 'react';
import './RegisterFormFive.css';
import {useSelector, useDispatch} from "react-redux";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import {AppDispatch, RootState} from "../../../../redux/Store";
import {StyledNextButton} from "../RegisterNextButton/RegisterNextButton";
import {resendEmail, sendVerification} from "../../../../redux/Slices/RegisterSlice";

export const RegisterFormFive:React.FC = () => {
    const state = useSelector((state:RootState) => state.register);
    const dispatch:AppDispatch = useDispatch();

    const [code, setCode] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCode(e.target.value);
    };
    const resend = () =>{
        dispatch(
            resendEmail(state.userName)
        )
    };
    const verify = () =>{
        dispatch(sendVerification({
            userName: state.userName,
            code
        }))
    }
    return (
        <div className='reg-step-five-container'>
            <div className="reg-step-five-content">
                <h1>We sent you a code</h1>
                <p>Enter it bellow to verify {state.email}</p>
                <ValidatedTextInput valid={true}
                                    name={'code'}
                                    label={'Verification Code'}
                                    changeValue={handleChange}/>
                <p className="reg-step-five-message" onClick={resend}>Didn't receive a email?</p>
            </div>
            <StyledNextButton active={code ? true : false}
                              disabled={code ? false : true}
                              color={'black'}
                              onClick={verify}>Next</StyledNextButton>
        </div>
    );
};