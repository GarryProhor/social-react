import {ForgotFormOne} from "../components/ForgotForms/ForgotFormOne";
import {ForgotFormTwo} from "../components/ForgotForms/ForgotFormTwo";

export const determineForgotFormContent = (step: number, setCredential: (value: string) => void, error: boolean,
                                           email: string, phone: string): JSX.Element => {
    switch (step) {
        case 1:
            return <ForgotFormOne setCredential={setCredential} error={error}/>
        case 2:
            return <ForgotFormTwo email={email} phone={phone}/>
        case 3:
            return <></>
    }
    return <></>
}