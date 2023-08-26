import React from 'react';
import {ModalButton} from "../../../../components/ModalButton/ModalButton";
import './ForgotButtonTwo.css';

interface ForgotButtonTwoProps{
    onCancel: ()=>void;
    sendCode: ()=>void;
}
export const ForgotButtonTwo:React.FC<ForgotButtonTwoProps> = ({onCancel, sendCode}) => {
    return (
        <div className='forgot-button-two'>
            <ModalButton
                height={50}
                active={true}
                backgroundColor={"black"}
                hoverBackground={{
                    r:0,
                    g:0,
                    b:0,
                    a:.9
                }}
                fontColor={"white"}
                fontSize={17}
                fontWeight={700}
                onClick={sendCode}
            >
                Next
            </ModalButton>
            <ModalButton
                height={50}
                active={true}
                backgroundColor={"white"}
                borderColor={"#536471"}
                hoverBackground={{
                    r:83,
                    g:100,
                    b:113,
                    a:.1
                }}
                hoverBorder={{
                    r:83,
                    g:100,
                    b:113,
                    a:1
                }}
                fontColor={"black"}
                fontSize={17}
                fontWeight={600}
                onClick={onCancel}
            >
                Cancel
            </ModalButton>
        </div>
    );
};