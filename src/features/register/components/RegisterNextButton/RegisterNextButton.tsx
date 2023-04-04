import styled from "styled-components";
import {StyledNextButtonProps} from "../../../../utils/GlobalInterfaces";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../redux/Store";
import {incrementStep, registerUser, sendVerification, updateUserPhone} from "../../../../redux/Slices/RegisterSlice";
import {cleanDateForRequest} from "../../utils/DateUtinls";

export const StyledNextButton = styled.button<StyledNextButtonProps>`
  width: 75%;
  height: 52px;
  font-size: 17px;
  color: white;
  background-color: ${(props)=>props.color === 'blue'? props.theme.colors.blue : props.theme.colors.black};
  opacity: ${(props)=>props.active ? 1.0 : .5};
  border-radius: 50px;
  border: none;
  cursor: ${(props)=>props.active? 'pointer':'auto'};
`
interface RegisterNextButtonProps{
    step: number;
}
export const RegisterNextButton:React.FC<RegisterNextButtonProps> = ({step}) =>{

    const state = useSelector((state:RootState) => state.register);
    const dispatch:AppDispatch = useDispatch();

    const nextStep = () =>{
        dispatch(incrementStep());
    }

    const sendUserInfo = () =>{
        const user = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            dob: cleanDateForRequest(state.dob)
        }
        console.log('We are attempting to register the user')
        dispatch(registerUser(user));
    }

    const sendPhoneNumber = () =>{
        dispatch(updateUserPhone({
            userName: state.userName,
            phone: state.phoneNumber
        }))
    }

    const verifyEmail = () =>{
        dispatch(sendVerification({
            userName: state.userName,
            code: state.code,
        }))
    }

    const determineButtonContent = (step:number):JSX.Element => {
        switch (step){
            case 1:
                let stepOneActive:boolean = state.dobValid && state.emailValid && state.firstNameValid && state.lastNameValid;

                return <StyledNextButton disabled={!stepOneActive}
                                         active={stepOneActive}
                                         color={"black"}
                                         onClick={nextStep}>
                                         Next
                       </StyledNextButton>
            case 2:
                return  <StyledNextButton active={true}
                                          color={'black'}
                                          onClick={nextStep}>
                                          Next
                        </StyledNextButton>
            case 3:
                return <StyledNextButton active={true}
                                         color={'blue'}
                                         onClick={sendUserInfo}>
                                         Sing Up
                       </StyledNextButton>
            case 4:
                let stepFourActive = !!(state.phoneNumber && state.phoneNumberValid)
                return <StyledNextButton active={stepFourActive}
                                         color={'black'}
                                         disabled={!stepFourActive}
                                         onClick={sendPhoneNumber}>
                            Update Number
                       </StyledNextButton>
            case 5:
                let stepFiveActive = !!state.code
                return <StyledNextButton active={stepFiveActive}
                                         disabled={!stepFiveActive}
                                         color={'black'}
                                         onClick={verifyEmail}>
                            Next
                       </StyledNextButton>
            default:
                return <StyledNextButton disabled={true}
                                         active={false}
                                         color={"black"}
                                         onClick={() => console.log("next step garry")}>
                    {step}
                </StyledNextButton>
        }
    }
    return determineButtonContent(step);
}