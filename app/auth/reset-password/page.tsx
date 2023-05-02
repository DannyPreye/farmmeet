"use client";
import React from "react";
import { Input, PrimaryButton } from "@/components/auth";
const page = () => {
    return (
        <div>
            <div className="grid gap-4">
                <Input
                    value=""
                    type="password"
                    name="new_password"
                    placeholder="New Password"
                    onChange={() => {}}
                />
                <Input
                    value=""
                    type="password"
                    name="old_password"
                    placeholder="Old Password"
                    onChange={() => {}}
                />
                <div className="grid items-center">
                    <PrimaryButton
                        onClick={() => {}}
                        title="Submit"
                        className="mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
