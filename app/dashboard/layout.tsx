"use client";
import React from "react";
import Image from "next/image";
import { Aside } from "@/components";
import { NextPage } from "next";

interface Props {
    children: React.ReactNode;
}
const layout: NextPage<Props> = ({ children }) => {
    return (
        <div className="flex lg:flex-row flex-col  ">
            <Aside />

            <div className="  lg:w-4/5 relative">{children}</div>
        </div>
    );
};

export default layout;
