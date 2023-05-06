import React, { FC, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input, Select } from "@/components/auth";
import { signupContext } from "../contexts/signUpContext";

interface Props {
    countries: { name: string; code: string }[];
    selectedCountry: { name: string; code: string } | null;
    setSelectedCountry: React.Dispatch<
        React.SetStateAction<{ name: string; code: string } | null>
    >;
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
    setSignUpFormData: React.Dispatch<
        React.SetStateAction<Record<string, unknown>>
    >;
}

const SignUpForm3: FC<Props> = ({
    countries,
    selectedCountry,
    setSelectedCountry,
    setActiveForm,
    setSignUpFormData,
}) => {
    const { signup3Params, setSignUp3Params } = useContext(signupContext);

    const handleSubmit = (values: {
        country: "";
        state: "";
        city: "";
        street: "";
    }) => {};

    const validationSchema = Yup.object({
        country: Yup.string().required("Country is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
        street: Yup.string(),
    });

    return (
        <div className="w-full mx-auto">
            <Formik
                onSubmit={handleSubmit}
                initialValues={signup3Params}
                validationSchema={validationSchema}
            >
                {({ values, handleBlur, handleChange, errors, touched }) => (
                    <form className="grid gap-4">
                        <Select
                            onChange={handleChange}
                            defaultValue="Country"
                            options={countries}
                            type={"contry"}
                            name="country"
                            value={values.country}
                            onBlur={handleBlur}
                            error={
                                (errors.country && touched.country) as boolean
                            }
                        />
                        <Select
                            onChange={handleBlur}
                            defaultValue="State"
                            options={countries}
                            type={"contry"}
                            value={values.state}
                            name="state"
                            onBlur={handleBlur}
                            error={(errors.state && touched.state) as boolean}
                        />
                        <Select
                            onChange={handleChange}
                            defaultValue="City"
                            options={countries}
                            type={"contry"}
                            name="city"
                            onBlur={handleBlur}
                            value={values.city}
                            error={(errors.city && touched.city) as boolean}
                        />

                        <Input
                            type="text"
                            placeholder="Street"
                            value={values.street}
                            onChange={handleChange}
                            name="street"
                            error={(errors.street && touched.street) as boolean}
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

export default SignUpForm3;
