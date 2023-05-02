"use client";
import React from "react";
import { Input, PrimaryButton, IconButton } from "@/components/auth";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const page = () => {
    return (
        <div className="w-full  ">
            <div className="grid gap-4">
                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value=""
                    onChange={() => {}}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value=""
                    onChange={() => {}}
                />

                <PrimaryButton
                    title="Login"
                    className="mt-4"
                    onClick={() => {}}
                />
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
        </div>
    );
};

export default page;
