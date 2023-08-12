import React from 'react';
import './ForgotButtonOne.css';
import {ModalButton} from "../../../../components/ModalButton/ModalButton";

interface ForgotButtonOneProps{
    value:string;
    handleClick:()=>void;
}
export const ForgotButtonOne:React.FC<ForgotButtonOneProps> = ({value, handleClick}) => {
    return (
        <div className='forgot-button-one'>
            <ModalButton
                height={50}
                active={value ? true : false}
                backgroundColor={value ? "black" : "rgba(0,0,0,.8)"}
                hoverBackground={{
                    r:0,
                    g:0,
                    b:0,
                    a:.8
                }}
                fontColor={"white"}
                fontSize={17}
                fontWeight={700}
                onClick={handleClick}
            >
                Next
            </ModalButton>
        </div>
    );
};