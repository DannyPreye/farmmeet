import React, { FC } from "react";

interface Props {
    title: string;
    onClick?: () => void;
    disabled?: boolean | false;
    className?: string;
    type?: "submit" | "button";
}

const primaryButton: FC<Props> = ({
    title,
    onClick,
    disabled,
    className,
    type,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-[80%] text-primary-white
         bg-secondary-green max-w-[461px] h-[55px] mx-auto
         rounded-[17px] font-bold ${className}`}
        >
            {title}
        </button>
    );
};

export default primaryButton;
