import React from 'react';
import './RegisterDateInput.css';
import {ValidatedDateSelected} from "../../../../components/ValidatedInput/ValidatedDateSelected";
import {getMonths, getDays, getYears} from "../../utils/DateUtinls";

export const RegisterDateInput:React.FC = () => {
    return (
        <div className='register-date'>
            <ValidatedDateSelected style={'validated-month'}
                                   valid={true}
                                   name={'Month'}
                                   dropDown={getMonths}
            />
            <ValidatedDateSelected style={'validated-day'}
                                   valid={true}
                                   name={'Day'}
                                   dropDown={getDays}
            />
            <ValidatedDateSelected style={'validated-year'}
                                   valid={true}
                                   name={'Year'}
                                   dropDown={getYears}
            />
        </div>
    );
};