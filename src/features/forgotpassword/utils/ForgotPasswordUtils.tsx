import {ForgotFormOne} from "../components/ForgotForms/ForgotFormOne";
import {ForgotFormTwo} from "../components/ForgotForms/ForgotFormTwo";
import {ForgotButtonOne} from "../components/ForgotButtonOne/ForgotButtonOne";
import {ForgotButtonTwo} from "../components/ForgotButtonTwo/ForgotButtonTwo";
import {ForgotFormThree} from "../components/ForgotForms/ForgotFormThree";

export const determineForgotFormContent = (step: number, setCredential: (value: string) => void, error: boolean,
                                           email: string, phone: string, valid:boolean, updateCode:(value:number)=>void ): JSX.Element => {
    switch (step) {
        case 1:
            return <ForgotFormOne setCredential={setCredential} error={error}/>
        case 2:
            return <ForgotFormTwo email={email} phone={phone}/>
        case 3:
            return <ForgotFormThree valid={valid} updateCode={updateCode}/>
    }
    return <></>
}

export const determineForgotButton = (step: number, credential: string, searchUser: () => void, cancel: () => void, sendCode: () => void):JSX.Element => {
    switch (step){
        case 1:
            return <ForgotButtonOne value={credential} handleClick={searchUser} />
        case 2:
            return <ForgotButtonTwo onCancel={cancel} sendCode={sendCode} />
        case 3:
            return <></>
    }
    return <></>
}