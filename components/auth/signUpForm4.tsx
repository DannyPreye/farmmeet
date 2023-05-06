import React, { FC, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import { Input, Select } from "@/components/auth";
import { signupContext } from "../contexts/signUpContext";

interface Props {
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
    setSignUpFormData: React.Dispatch<
        React.SetStateAction<Record<string, unknown>>
    >;
    signUpFormData: {
        first_name: string;
        last_name: string;
        gender: string;
        phone: string;
        email: string;
        account_type: string;
        country: string;
        state: string;
        city: string;
        street: string;
        password: string;
        confirm_password: string;
    };
}
const signUpForm4: FC<Props> = ({
    setActiveForm,
    setSignUpFormData,
    signUpFormData,
}) => {
    const { signup4Params } = useContext(signupContext);

    const handleSubmit = async (values: {
        password: string;
        confirm_password: string;
    }) => {
        setSignUpFormData((prev) => ({ ...prev, ...values }));

        const check = Object.values(signUpFormData).indexOf("ff");

        console.log(signUpFormData);

        if (check) {
            toast.info("Please Fill up the required Fields in the form");
        }
    };

    const validationSchema = Yup.object({
        password: Yup.string().required(),
        confirm_password: Yup.ref("password"),
    });

    return (
        <div className="w-full mx-auto">
            <Formik onSubmit={handleSubmit} initialValues={signup4Params}>
                {({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                }) => (
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <Input
                            type="password"
                            value={values.password}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onblur={handleBlur}
                            error={
                                (errors.password && touched.password) as boolean
                            }
                        />

                        <Input
                            type="password"
                            value={values.confirm_password}
                            placeholder="Confirm Password"
                            name="confirm_password"
                            onChange={handleChange}
                            onblur={handleBlur}
                            error={
                                (errors.confirm_password &&
                                    touched.confirm_password) as boolean
                            }
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
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

            <ToastContainer />
        </div>
    );
};

export default signUpForm4;
