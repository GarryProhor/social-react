import React from 'react';
import './RegisterDateInput.css';
import {ValidatedDateSelected} from "../../../../components/ValidatedInput/ValidatedDateSelected";

export const RegisterDateInput:React.FC = () => {
    return (
        <div className='register-date'>
            <ValidatedDateSelected style={'validated-month'}
                                   valid={true}
                                   name={'Month'}
                                   dropDown={()=>{return[]}}
            />
            <ValidatedDateSelected style={'validated-day'}
                                   valid={true}
                                   name={'Day'}
                                   dropDown={()=>{return[]}}
            />
            <ValidatedDateSelected style={'validated-year'}
                                   valid={true}
                                   name={'Year'}
                                   dropDown={()=>{return[]}}
            />
        </div>
    );
};