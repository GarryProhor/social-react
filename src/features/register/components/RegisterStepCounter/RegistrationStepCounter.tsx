import React from 'react';
import './RegisterStepCounter.css';
import {displayIcon} from "../../utils/RegisterStepUtils";

interface RegisterStepProps{
    step: number;
}
export const RegistrationStepCounter:React.FC<RegisterStepProps> = ({step}) => {
    return (
        <div className='reg-step-counter-container'>
            <div className='reg-step-counter-bnt'>
                {displayIcon(step)}
            </div>
            <span className='reg-step-number'>Step {step} of 6</span>
        </div>
    );
};