import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { logoImage } from "../../public/shared/";

interface Props {
    children: React.ReactNode;
}
const layout: NextPage<Props> = ({ children }) => {
    return (
        <div className="bg-white pb-8 lg:pb-0">
            <div className="container px-5 lg:px-[56px] flex items-center gap-2 lg:gap-5 lg:flex-row flex-col">
                <div className="lg:h-full">
                    <Image
                        src={logoImage}
                        className="object-contain h-full w-full"
                        alt="logo image"
                    />
                </div>
                <div className="lg:w-[60%] relative w-[100%] items-center  py-20  rounded-[48px] bg-primary">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;
