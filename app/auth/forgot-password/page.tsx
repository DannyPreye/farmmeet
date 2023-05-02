"use client";
import React from "react";
import { Input, PrimaryButton } from "@/components/auth";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return (
        <div className="grid gap-4">
            <Input
                value=""
                type="email"
                placeholder="Email"
                name="email"
                onChange={() => {}}
            />

            <div className="grid items-end">
                <PrimaryButton
                    onClick={() => router.push("/auth/reset-password")}
                    title="Submit"
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default page;
