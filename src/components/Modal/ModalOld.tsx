import React from 'react';
import './modal.css';
import '../../assets/css/global.css';

interface ModalProps{
    children: JSX.Element;
}

export const ModalOld:React.FC<ModalProps> = (props:ModalProps) => {
    return (
        <div className='modal-overlay'>
            <div className="modal-container bg-color">
                {props.children}
            </div>
        </div>
    );
};
