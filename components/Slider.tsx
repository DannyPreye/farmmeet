import Image from "next/image";
import React, { FC, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface SliderProps {
    slides: string[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    };
    const prevSlide = () => {
        current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
    };
    return (
        <div className="w-full h-full rounded-[12px] relative overflow-hidden  ">
            <div
                style={{ transform: `translateX(-${current * 100}%)` }}
                className="w-full h-full flex relative duration-500 transition-transform "
            >
                {slides.map((slide, index) => (
                    <div className="relative w-full h-full flex-shrink-0">
                        <Image
                            src={slide}
                            alt="slide"
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <div className="absolute w-[90%] m-auto left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] flex justify-between">
                    <div
                        onClick={prevSlide}
                        className={`${
                            current == 0 ? "invisible" : "visible"
                        } w-8 h-8 hover:scale-[1.3] duration-200 cursor-pointer rounded-full grid place-items-center text-secondary-white font-bol bg-slate-600`}
                    >
                        <AiOutlineLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className={`${
                            current == slides.length - 1
                                ? "invisible"
                                : "visible"
                        } w-8 h-8 hover:scale-[1.3] duration-200 cursor-pointer rounded-full grid place-items-center text-secondary-white font-bol bg-slate-600`}
                    >
                        <AiOutlineRight />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;
