import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input, Select } from "@/components/auth";
import { signupContext } from "../contexts/signUpContext";

interface Props {
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
    setSignUpFormData: React.Dispatch<
        React.SetStateAction<Record<string, unknown>>
    >;
}

const signUpForm2 = ({ setActiveForm, setSignUpFormData }: Props) => {
    const { signup2Params, setSignUp2Params } = useContext(signupContext);

    const handleSubmit = (values: { email: ""; account_type: "" }) => {
        setSignUp2Params({ ...values });
        setActiveForm((prev) => prev + 1);
        setSignUpFormData((prev) => ({ ...prev, ...values }));
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        account_type: Yup.string().required("Please Select an account type"),
    });

    return (
        <div className="w-full mx-auto">
            <Formik
                initialValues={signup2Params}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    touched,
                }) => (
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <Input
                            type="email"
                            value={values.email}
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onblur={handleChange}
                            error={(errors.email && touched.email) as boolean}
                        />

                        <Select
                            defaultValue="Account Type"
                            options={["Farmer", "Supplier", "Buyer"]}
                            name="account_type"
                            value={values.account_type}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />

                        <button
                            disabled={Object.keys(errors).length > 0}
                            type="submit"
                            className={`w-[80%]  duration-500 text-primary-white
         bg-secondary-green max-w-[461px] h-[55px] mx-auto
         rounded-[17px] font-bold mt-4 ${
             Object.keys(errors).length > 0
                 ? "opacity-50 cursor-not-allowed"
                 : "hover:scale-[.9]"
         }}`}
                        >
                            Next
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default signUpForm2;
