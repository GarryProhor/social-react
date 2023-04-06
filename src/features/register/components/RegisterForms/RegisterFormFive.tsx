import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import {AppDispatch, RootState} from "../../../../redux/Store";
import {resendEmail, updateRegister} from "../../../../redux/Slices/RegisterSlice";

import './RegisterForm.css';
import '../../../../assets/css/global.css';

export const RegisterFormFive:React.FC = () => {
    const state = useSelector((state:RootState) => state.register);
    const dispatch:AppDispatch = useDispatch();

    const [, setCode] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCode(e.target.value);
        dispatch(updateRegister({
            name: "code",
            value: e.target.value,
        }));
    };
    const resend = () =>{
        dispatch(
            resendEmail(state.userName)
        )
    };

    return (
        <div className='register-container'>
            <div className="register-content">
                <h1 className='register-header-2'>We sent you a code</h1>
                <p className='register-text color-gray'>Enter it bellow to verify {state.email}</p>
                <div className="register-five-input-wrapper">
                    <ValidatedTextInput valid={true}
                                        name={'code'}
                                        label={'Verification Code'}
                                        changeValue={handleChange}/>
                    <p className="register-five-message color-blue" onClick={resend}>Didn't receive a email?</p>
                </div>
            </div>
        </div>
    );
};