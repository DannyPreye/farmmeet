"use client";
import React, { useState, useEffect, useCallback, useContext } from "react";

import { signupContext } from "@/components/contexts/signUpContext";
import {
    PrimaryButton,
    SignUpForm1,
    SignUpForm2,
    SignUpForm3,
    SignUpForm4,
} from "@/components/auth";
import Link from "next/link";

const Pagination = ({
    activeForm,
    index,
    setActiveForm,
}: {
    activeForm: Number;
    index: number;
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <span
            onClick={() => setActiveForm(index)}
            className={`w-[30%] cursor-pointer h-[5px] transition-colors duration-500 ${
                activeForm == index ? "bg-primary" : "bg-[#E3E7E4]"
            } rounded-full block "`}
        ></span>
    );
};

const page = () => {
    const { signUpFormData, setSignUpFormData } = useContext(signupContext);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState<{
        name: string;
        code: string;
    } | null>();
    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState<{} | null>(null);

    // Fetch countries from restcountries API
    const fetchCountries = useCallback(async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            const sortCountries = data
                .map((country: any) => {
                    return {
                        name: country.name.common,
                        code: country.cca2,
                    };
                })
                .sort((a: any, b: any) => a.name.localeCompare(b.name));
            setCountries(sortCountries);
        } catch (error) {}
    }, []);

    const fetchCountryRegion = useCallback(async () => {
        try {
            const res = await fetch(
                `https://laravel-world.com/api/states?filters%5Bcountry_code%5D=${selectedCountry}&fields=cities`
            );
            const data = await res.json();

            setRegions(data);
        } catch (error) {}
    }, [selectedCountry]);

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        fetchCountryRegion();
    }, [selectedCountry]);

    const [activeForm, setActiveForm] = useState(0);
    return (
        <div className="grid ">
            <div className="flex gap-3 top-[-5%]  items-center w-[80%] absolute  mx-auto left-0 right-0 z-30">
                {[0, 1, 2, 3].map((_, index) => (
                    <Pagination
                        setActiveForm={setActiveForm}
                        index={index}
                        activeForm={activeForm}
                    />
                ))}
            </div>
            {/*------------- FORMS -------------- */}
            {activeForm == 0 && (
                <SignUpForm1
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}
            {activeForm == 1 && (
                <SignUpForm2
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}
            {activeForm == 2 && (
                <SignUpForm3
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                    setSelectedCountry={setSelectedCountry}
                    selectedCountry={selectedCountry}
                    countries={countries}
                />
            )}
            {activeForm == 3 && (
                <SignUpForm4
                    signUpFormData={signUpFormData}
                    setSignUpFormData={setSignUpFormData}
                    setActiveForm={setActiveForm}
                />
            )}

            <div className="grid items-center mt-[20px]">
                {/* <PrimaryButton
                    title="Next"
                    onClick={() => {
                        activeForm < 3 ? setActiveForm(activeForm + 1) : null;
                    }}
                /> */}
                <p className=" text-center mt-[20px] font-semibold text-primary-white w-fit mx-auto">
                    Already have an account?{" "}
                    <Link className="font-bold" href={"/auth/login"}>
                        Sign in!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
