"use client";
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Input, PrimaryButton, IconButton } from "@/components/auth";

const server = process.env.NEXT_PUBLIC_BACKEND_SERVER;

const page = () => {
    const router = useRouter();
    const initialValues = {
        email: "",
        password: "",
    };
    console.log(server);
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const handleSubmit = async (
        values: any,
        errors: FormikErrors<{
            email: string;
            password: string;
        }>
    ) => {
        const { email, password } = values;
        try {
            const response = await toast.promise(
                axios.post(`${server}/auth/login`, {
                    email,
                    password,
                }),
                {
                    pending: "Logging in...",
                    success: "Logged in successfully",
                    error: "Error logging in",
                }
            );
            if (response.data.success) {
                toast.success(response.data.message);
                router.push("/dashboard/discover");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <div className="w-full  ">
            <div className="grid gap-4">
                <Formik
                    onSubmit={(values) => {
                        handleSubmit(
                            values,
                            validationSchema.validateSync(values)
                        );
                    }}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                    }) => (
                        <form
                            className="w-full mx-auto grid gap-2"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onblur={handleBlur}
                                error={errors.email && touched.email}
                            />
                            <p className="w-fit  text-red-700 mx-auto text-center">
                                {errors.email && touched.email && errors.email}
                            </p>
                            <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onblur={handleBlur}
                            />
                            <p className="w-fit  text-red-700 mx-auto text-center">
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
                            </p>
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
                                Login
                            </button>
                        </form>
                    )}
                </Formik>
                <Link
                    href={"/auth/forgot-password"}
                    className="font-bold w-fit mx-auto text-primary-white"
                >
                    Forgotten Password
                </Link>
                <div className="mx-auto mt-3 w-[80%] max-w-[461px] flex items-center gap-3">
                    <span className="w-[60%] h-[1px] bg-primary-white block" />
                    <span className="font-bold text-primary-white">Or</span>
                    <span className="w-[60%]  h-[1px] bg-primary-white block" />
                </div>

                <IconButton
                    Icon={<FcGoogle className="text-[39px] " />}
                    title="Login Using Google"
                    onClick={() => {}}
                    className="mt-4"
                />
                <p className="font-bold text-primary-white w-fit mx-auto">
                    <span>Don&apos;t have an account? </span>
                    <Link href={"/auth/signup"}>Sign Up</Link>
                </p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default page;
