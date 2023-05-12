import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter, Nunito, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

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
            <body className="font-nunito">{children}</body>
        </html>
    );
}
