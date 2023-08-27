import React from 'react';
import './ForgotButtonThree.css';
import {ModalButton} from "../../../../components/ModalButton/ModalButton";

interface ForgotButtonThreeProps {
    active: boolean;
    checkCode: () => void;
    back: () => void;
}

export const ForgotButtonThree: React.FC<ForgotButtonThreeProps> = ({active, checkCode, back}) => {
    return (
        <div className='forgot-button-three'>
            {
                active ?
                    <ModalButton
                        height={50}
                        active={true}
                        backgroundColor={"black"}
                        hoverBackground={{
                            r: 0,
                            g: 0,
                            b: 0,
                            a: .9
                        }}
                        fontColor={"white"}
                        fontSize={17}
                        fontWeight={700}
                        onClick={checkCode}
                    >
                        Next
                    </ModalButton>
                    :
                    <ModalButton
                        height={50}
                        active={true}
                        borderColor={"#aab8c2"}
                        backgroundColor={"white"}
                        hoverBackground={{
                            r: 0,
                            g: 0,
                            b: 0,
                            a: .05
                        }}
                        hoverBorder={{
                            r: 0,
                            g: 0,
                            b: 0,
                            a: .3
                        }}
                        fontColor={"black"}
                        fontSize={17}
                        fontWeight={600}
                        onClick={back}
                    >
                        Back
                    </ModalButton>
            }
        </div>
    );
};