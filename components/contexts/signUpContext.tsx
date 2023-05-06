import { createContext, useState, useLayoutEffect } from "react";

export const signupContext = createContext({
    signup1Params: { first_name: "", last_name: "", gender: "", phone: "" },
    setSignUp1Params: () => {},
    signup2Params: { email: "", accountType: "" },
    setSignUp2Params: () => {},
    signup3Params: { country: "", state: "", city: "", street: "" },
    setSignUp3Params: () => {},
    signup4Params: { password: "", confirm_password: "" },
    setSignUp4Params: () => {},
    signUpFormData: {
        first_name: "",
        last_name: "",
        gender: "",
        phone: "",
        email: "",
        account_type: "",
        country: "",
        state: "",
        city: "",
        street: "",
        password: "",
        confirm_password: "",
    },
    setSignUpFormData: () => {},
} as any);

interface Props {
    children: React.ReactNode;
}

const SignupContextProvider = ({ children }: Props) => {
    const [signup1Params, setSignUp1Params] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        phone: "",
    });
    const [signup2Params, setSignUp2Params] = useState({
        email: "",
        account_type: "",
    });

    const [signup3Params, setSignUp3Params] = useState({
        country: "",
        state: "",
        city: "",
        street: "",
    });

    const [signup4Params, setSignUp4Params] = useState({
        password: "",
        confirm_password: "",
    });

    const [signUpFormData, setSignUpFormData] = useState({
        ...signup1Params,
        ...signup2Params,
        ...signup3Params,
        ...signup4Params,
    });

    return (
        <signupContext.Provider
            value={{
                signup1Params,
                setSignUp1Params,
                signup2Params,
                setSignUp2Params,
                signup3Params,
                setSignUp3Params,
                signup4Params,
                setSignUp4Params,
                signUpFormData,
                setSignUpFormData,
            }}
        >
            {children}
        </signupContext.Provider>
    );
};

export default SignupContextProvider;
