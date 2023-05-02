import React from "react";
import { Input, Select } from "@/components/auth";

const signUpForm2 = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid gap-4">
                <Input
                    type="email"
                    value=""
                    placeholder="Email"
                    name="fname"
                    onChange={() => {}}
                />

                <Select
                    defaultValue="Account Type"
                    options={["Farmer", "Supplier", "Buyer"]}
                />
            </div>
        </div>
    );
};

export default signUpForm2;
