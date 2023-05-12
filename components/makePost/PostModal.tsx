import React, { FC } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user: {
        name: string;
        image: string;
    };
}

const PostModal: FC<Props> = ({ isOpen, setIsOpen, user }) => {
    return (
        <div
            onClick={() => setIsOpen(false)}
            className={`${
                isOpen ? "block" : "hidden"
            } fixed  top-0 left-0 w-full z-[2000]
             h-screen bg-[#ebe8e89c] backdrop-blur-[4px] grid place-items-center`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="lg:w-[50%] w-[90%] bg-white rounded-[12px] px-5 py-2 shadow-md"
            >
                <div className="flex items-center justify-between border-b-[1px]  py-4">
                    <span className="text-[16px] font-extrabold font-montserrat text-primary-grey">
                        Create a Post
                    </span>
                    <IoCloseOutline
                        className="cursor-pointer text-[20px] text-primary-grey"
                        size={20}
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                <div className="mt-4">
                    <textarea
                        name=""
                        id=""
                        placeholder="Write a post"
                        className="w-full h-[100px] resize-none outline-none border-none py-2"
                    ></textarea>

                    <div className="flex justify-end">
                        <button
                            className="px-4 h-[25px] bg-primary text-primary-white font-bold font-nunito
                     rounded-[12px]"
                        >
                            Post
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2 py-3 border-t-[1px] mt-3">
                    <div className="text-[20px] cursor-pointer text-primary">
                        <label htmlFor="image" className="cursor-pointer">
                            <BsCardImage />
                        </label>
                        <input type="file" hidden id="image" multiple />
                    </div>
                    <div className="text-[20px] cursor-pointer text-primary">
                        <label htmlFor="image" className="cursor-pointer">
                            <MdVideoLibrary />
                        </label>
                        <input type="file" hidden id="image" multiple />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
