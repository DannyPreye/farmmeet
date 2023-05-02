import React, { FC } from "react";

interface Props {
    placeholder: string;
    type: string | "text" | "password";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onblur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onfocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<Props> = ({
    placeholder,
    type,
    name,
    value,
    onChange,
    onblur,
    onfocus,
}) => {
    return (
        <div className="w-[90%] mx-auto max-w-[566px]  h-[55px] rounded-[17px] bg-secondary-white">
            <input
                type={type}
                value={value}
                onFocus={onfocus}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                onBlur={onblur}
                className=" placeholder:font-bold w-full font-bold h-full px-[22px] py-[12px] bg-transparent outline-none"
            />
        </div>
    );
};

export default Input;
