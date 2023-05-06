"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input, PrimaryButton } from "@/components/auth";

const page = () => {
    const router = useRouter();
    const initialValues = {
        email: "",
    };

    const handleSubmit = (values: { email: string }) => {};

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                touched,
            }) => (
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <Input
                        value={values.email}
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onblur={handleBlur}
                        error={(errors.email && touched.email) as boolean}
                    />

                    <div className="grid items-end">
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
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default page;
