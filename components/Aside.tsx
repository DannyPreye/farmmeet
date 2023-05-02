import { dashboardMenus } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelectedLayoutSegment } from "next/navigation";

const Aside = () => {
    const segment = useSelectedLayoutSegment();
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div
            style={{ boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="lg:w-[22%] z-[1220] bg-white flex lg:flex-col items-center lg:items-start px-[36px] justify-between py-[34px]  lg:h-screen lg:max-h-full sticky left-0 top-0 shadow-sm lg:shadow-md rounded-tr-[26px]"
        >
            <div className="w-[80px] h-[40px] relative lg:w-[177.19px] lg:h-[105px]">
                <Image
                    src={"/shared/logo.svg"}
                    className="object-contain"
                    fill
                    alt="farmmeet"
                />
            </div>

            {/* ---------------- menu icon --------------------- */}
            <div
                className="text-primary text-[20px] lg:hidden"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            {/* -------------------- lg-menu-content ----------------- */}
            <MenuContent segment={segment} />

            {/* --------------------- logout ---------------------- */}
            <Link
                href={"/"}
                className=" hidden lg:flex   text-[24px w-[80%] text-primary-grey   justify-start items-center gap-5"
            >
                <FiLogOut />
                <span className=" font-[600] ]">Logout</span>
            </Link>
        </div>
    );
};

export default Aside;

function MenuContent({ segment }: { segment: string | null }) {
    console.log(segment);
    return (
        <div className="hidden lg:flex flex-col  w-[80%] items-start gap-5 cursor-pointer">
            {dashboardMenus.map((menu) => (
                <Link
                    href={menu.link}
                    key={`menu_${menu.name}`}
                    className="flex items-center justify-between gap-[18px]"
                >
                    <>
                        {segment === menu.link.split("/")[2] ? (
                            <Image src={menu.activeIcon} alt={menu.name} />
                        ) : (
                            <Image src={menu.inactiveIcon} alt={menu.name} />
                        )}
                    </>
                    <span
                        className={`${
                            segment === menu.link.split("/")[2]
                                ? "text-primary font-[800]"
                                : "text-primary-grey font-[600] "
                        } text-[24px]"`}
                    >
                        {menu.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}
