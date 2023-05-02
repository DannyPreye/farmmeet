import React, { FC } from "react";

import { Input, Select } from "@/components/auth";

interface Props {
    countries: { name: string; code: string }[];
    selectedCountry: { name: string; code: string } | null;
    setSelectedCountry: React.Dispatch<
        React.SetStateAction<{ name: string; code: string } | null>
    >;
}

const SignUpForm3: FC<Props> = ({
    countries,
    selectedCountry,
    setSelectedCountry,
}) => {
    return (
        <div className="w-full mx-auto">
            <div className="grid gap-4">
                <Select
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    defaultValue="Country"
                    options={countries}
                    type={"contry"}
                />
                <Select
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    defaultValue="State"
                    options={countries}
                    type={"contry"}
                />
                <Select
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    defaultValue="City"
                    options={countries}
                    type={"contry"}
                />

                <Input
                    type="text"
                    placeholder="Street"
                    value=""
                    onChange={() => {}}
                    name="street"
                />
            </div>
        </div>
    );
};

export default SignUpForm3;
