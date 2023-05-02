import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "FarmMeet",
    description:
        "Welcome to our social e-commerce platform connecting farmers, buyers, and suppliers. Discover new opportunities and form partnerships in the agricultural industry. Join now!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
