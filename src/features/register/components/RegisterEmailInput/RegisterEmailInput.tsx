import React, {useState} from 'react';
import './RegisterEmailInput.css';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/Store";
import {updateRegister} from "../../../../redux/Slices/RegisterSlice";
import {validatedEmail} from "../../../../services/Validators";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";

interface RegisterEmailInputProps{
    email:string;
}

export const RegisterEmailInput:React.FC<RegisterEmailInputProps> = ({email}) => {
    const [validEmail, satValidEmail] = useState<boolean>(true);
    const dispatch:AppDispatch = useDispatch();

    const updateEmail = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        dispatch(updateRegister({
            name:'email',
            value:e.target.value
        }));
        let valid = validatedEmail(e.target.value);
        satValidEmail(valid);
        dispatch(updateRegister({
            name:'emailValid',
            value:valid
        }));
    }
    return (
        <div className='register-email-input'>
            <ValidatedTextInput data={email}
                                valid={validEmail}
                                name={'email'}
                                label={'Email'}
                                changeValue={updateEmail}/>
            {validEmail ? <></> : <span className='register-email-error'>Please enter a valid email.</span>}
        </div>
    );
};

