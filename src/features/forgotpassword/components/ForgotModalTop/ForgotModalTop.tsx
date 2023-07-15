import React from 'react';
import './ForgotModalTop.css';
import blueLogo from '../../../../assets/img/logo-blue.png';
import '../../../../assets/css/global.css';

interface ForgotModalTopProps{
    closeModal: ()=>void;
}
export const ForgotModalTop:React.FC<ForgotModalTopProps> = ({closeModal}) => {
    return (
        <div className='forgot-modal-top'>
            <div className="forgot-modal-top-left" onClick={closeModal}>
                <div className="forgot-modal-top-shadow">
                    x
                </div>
            </div>
            <div className="forgot-modal-top-middle">
                <img src={blueLogo} alt="blueLogo" className="forgot-modal-top-logo"/>
            </div>
            <div className="forgot-modal-top-right"></div>
        </div>
    );
};
