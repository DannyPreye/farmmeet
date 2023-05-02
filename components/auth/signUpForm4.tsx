import React from "react";

import { Input, Select } from "@/components/auth";

const signUpForm4 = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid gap-4">
                <Input
                    type="password"
                    value=""
                    placeholder="Password"
                    name="password"
                    onChange={() => {}}
                />

                <Input
                    type="password"
                    value=""
                    placeholder="Confirm Password"
                    name="c-password"
                    onChange={() => {}}
                />
            </div>
        </div>
    );
};

export default signUpForm4;
