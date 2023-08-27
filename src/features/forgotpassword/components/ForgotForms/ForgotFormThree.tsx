import React from 'react';
import './ForgotForm.css';
import '../../../../assets/css/global.css';
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";

interface ForgotFormThreeProps{
    updateCode:(value:number)=>void;
    valid:boolean
}
export const ForgotFormThree:React.FC<ForgotFormThreeProps> = ({updateCode, valid}) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        updateCode(+e.target.value);
    }

    return (
        <div className='forgot-form-container'>
            <h1 className="forgot-form-header">We sent you a code</h1>
            <p className="forgot-form-text color-gray">
                Check you email tp get your confirmation code. If you need to request a new code, go back and reselect to a confirmation.
            </p>
            <ValidatedTextInput
                valid={valid}
                name={"code"}
                label={"Enter your code"}
                changeValue={handleChange}
            />
        </div>
    );
};