import React, { FC } from "react";
import { FcGoogle } from "react-icons/fc";

interface Props {
    title: string;
    onClick: () => void;
    disabled?: boolean | false;
    className?: string;
    Icon?: React.ReactNode;
}
const iconButton: FC<Props> = ({
    title,
    onClick,
    disabled,
    className,
    Icon,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center w-[80%] h-[55px] max-w-[461px] bg-primary-white justify-center rounded-[17px] mx-auto text-primary font-bold gap-2 ${className}`}
        >
            {Icon}
            {title}
        </button>
    );
};

export default iconButton;
