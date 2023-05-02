"use client";
import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import { logoImage } from "@/public/shared";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    // const router = useRouter();
    useLayoutEffect(() => {
        setTimeout(() => {
            window.location.href = "/auth/login";
        }, 1000);
    }, []);
    return (
        <main className="h-screen">
            <Image
                src={logoImage}
                alt="Farmmeet"
                className="w-full h-full object-contain"
            />
        </main>
    );
}
