import React, {useEffect, useState} from 'react';
import {Checkbox} from "../../../../components/Checkbox/Checkbox";
import {DropDown} from "../../../../components/DropDown/DropDown";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import {countryCodeDropDown} from "../../utils/RegisterModalUtils";
import {validatePhone} from "../../../../services/Validators";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/Store";
import {updateRegister} from "../../../../redux/Slices/RegisterSlice";

import '../RegisterForms/RegisterForm.css';
import '../../../../assets/css/global.css';

export const RegisterFormFour: React.FC = () => {


    const dispatch:AppDispatch = useDispatch();

    const [phoneCode, setPhoneCode] = useState<string>('+1');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [validNumber, setValidNumber] = useState<boolean>(true);

    const changeCode = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setPhoneCode(e.target.value.split(" ")[0]);
    }
    const changePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPhoneNumber(e.target.value);
        dispatch(updateRegister({
            name: 'phoneNumber',
            value: e.target.value
        }));
    }


    useEffect(()=>{
        console.log(phoneCode, phoneNumber);
        if(phoneNumber){
            setValidNumber(validatePhone(phoneNumber));
            dispatch(updateRegister({
                name: "phoneNumberValid",
                value: validatePhone(phoneNumber)
            }));
        }
    }, [phoneCode, phoneNumber])

    return (
        <div className='register-container'>
            <div className='register-content'>
                <h1 className='register-header-2'>Add a phone number</h1>
                <p className='register-text color-gray'>Enter the phone number you would like to associate with your Social account. You won't get a
                    verification code sent here.</p>
                <div className={validNumber ? 'register-four-input-wrapper' : 'register-four-input-wrapper-condensed'}>
                    <DropDown content={countryCodeDropDown}
                              change={changeCode}
                              label={'Country Code'}
                              defaultValue={'United States +1'}
                    />
                    <ValidatedTextInput valid={true}
                                        name={'phoneNumber'}
                                        label={'Your Phone Number'}
                                        changeValue={changePhoneNumber}
                    />
                    {validNumber ? <></> : <p className='register-error color-red'>Please enter a valid 9 digit number</p>}
                </div>
                <div className='register-four-checkbox-wrapper'>
                    <p className='register-text color-gray'>Let people who have your phone number find and connect with you on Social. <span
                        className='register-link color-blue'>Learn more</span>.</p>
                    <Checkbox/>
                </div>
                <div className='register-four-checkbox-wrapper'>
                    <p className='register-text color-gray'>Let Social use your phone number to personalize our services, including ads (if permitted by your
                        Ads preferences). If you don't enable this, Social will still use your phone number for purposes
                        including account security, spam, fraud, and abuse prevention.<span
                            className='register-link color-blue'>See our Privacy Policy for more information.</span>.</p>
                    <Checkbox/>
                </div>
            </div>
        </div>
    );
};