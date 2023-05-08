import React, { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: any[];
    type?: null | string;
    value: string;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement, Element>) => void;
    name: string;
    error?: boolean | undefined;
}

const Select: FC<Props> = ({
    defaultValue,
    onChange,
    onBlur,
    options,
    type,
    value,
    name,
    error,
}) => {
    return (
        <div className="w-[90%] mx-auto max-w-[566px] relative">
            <select
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                id="select"
                value={value || defaultValue}
                // defaultValue={defaultValue}
                className={`w-full px-[22px] relative font-bold appearance-none text-[#B6B1B1] focus:border-none focus:outline-none py-[12px] mx-auto  h-[55px] rounded-[17px] bg-secondary-white ${
                    error ? "border-2 border-red-500" : "border-none"
                }`}
            >
                <option value={defaultValue} selected disabled>
                    {defaultValue}
                </option>
                {options.map((option, i) => (
                    <option
                        key={type ? option.name : option}
                        value={type ? option.code : option}
                    >
                        {type ? option.name : option}
                    </option>
                ))}
            </select>
            <label htmlFor="select">
                <BsChevronDown className="absolute text-[#B6B1B1] pointer-events-none right-3 my-auto bottom-0 top-0" />
            </label>
        </div>
    );
};

export default Select;
