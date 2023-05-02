import React from "react";
import { Input, PrimaryButton, IconButton, Select } from "@/components/auth";

const signUpForm1 = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid gap-4">
                <Input
                    type="text"
                    value=""
                    placeholder="First Name"
                    name="fname"
                    onChange={() => {}}
                />
                <Input
                    type="text"
                    value=""
                    placeholder="Last Name"
                    name="lname"
                    onChange={() => {}}
                />
                <Select defaultValue="Gender" options={["Male", "Female"]} />
                <Input
                    type="text"
                    value=""
                    placeholder="Phone Number"
                    name="phone"
                    onChange={() => {}}
                />
            </div>
        </div>
    );
};

export default signUpForm1;
