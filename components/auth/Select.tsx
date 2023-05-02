import React, { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: any[];
    type?: null | string;
}

const Select: FC<Props> = ({ defaultValue, onChange, options, type }) => {
    return (
        <div className="w-[90%] mx-auto max-w-[566px] relative">
            <select
                onChange={onChange}
                id="select"
                defaultValue={defaultValue}
                className="w-full px-[22px] relative font-bold appearance-none text-[#B6B1B1] focus:border-none focus:outline-none py-[12px] mx-auto  h-[55px] rounded-[17px] bg-secondary-white"
            >
                <option value={defaultValue} selected disabled>
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option value={type ? option.code : option}>
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
