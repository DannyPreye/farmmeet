import React, { FC, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface Props {
    placeholder: string;
    type: string | "text" | "password";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onblur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onfocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean | "" | undefined;
}
const Input: FC<Props> = ({
    placeholder,
    type,
    name,
    value,
    onChange,
    onblur,
    onfocus,
    error,
}) => {
    const [passwordShow, setPasswordShow] = useState(false);
    return (
        <div
            className={`w-[90%] relative mx-auto max-w-[566px] flex overflow-hidden items-center pr-2  h-[55px] rounded-[17px] bg-secondary-white ${
                error ? "border-[2px] border-red-600" : "border-none"
            }`}
        >
            <input
                type={
                    passwordShow && type == "password"
                        ? "text"
                        : type !== "password"
                        ? "text"
                        : "password"
                }
                value={value}
                onFocus={onfocus}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                onBlur={onblur}
                className={`  placeholder:font-bold w-full flex-1 font-bold h-full px-[22px] py-[12px] bg-transparent  outline-none `}
            />
            {type == "password" && (
                <div
                    onClick={() => setPasswordShow((prev) => !prev)}
                    className=" cursor-pointer px-2 text-[18px]"
                >
                    {passwordShow ? (
                        <AiOutlineEyeInvisible />
                    ) : (
                        <AiOutlineEye />
                    )}
                </div>
            )}
        </div>
    );
};

export default Input;
