import React, {useEffect, useState} from 'react';
import './RegisterFormFive.css';
import {useSelector, useDispatch} from "react-redux";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import {RootState} from "../../../../redux/Store";
import {StyledNextButton} from "../RegisterNextButton/RegisterNextButton";

export const RegisterFormFive:React.FC = () => {
    const state = useSelector((state:RootState) => state.register);
    const [code, setCode] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCode(e.target.value);
    }
    return (
        <div className='reg-step-five-container'>
            <div className="reg-step-five-content">
                <h1>We sent you a code</h1>
                <p>Enter it bellow to verify {state.email}</p>
                <ValidatedTextInput valid={true}
                                    name={'code'}
                                    label={'Verification Code'}
                                    changeValue={()=>{}}/>
                <p className="reg-step-five-message">Didn't receive a email?</p>
                <StyledNextButton active={code ? true : false}
                                  disabled={code ? false : true}
                                  color={'black'}
                                  onClick={()=>{}}>Next</StyledNextButton>
            </div>
        </div>
    );
};