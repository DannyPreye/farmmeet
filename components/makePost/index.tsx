import Image from "next/image";
import React, { FC, useState } from "react";
import PostModal from "./PostModal";

interface Props {
    user: {
        image: string;
        name: string;
    };
}

const makePost: FC<Props> = ({ user }) => {
    const [post, setPost] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [privatePost, setPrivatePost] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div
            className="w-full border-[1px] border-[#c4c2c2] 
        rounded-[12px] px-5 py-2 "
        >
            <div className="flex items-center gap-3 justify-between">
                <div className="rounded-full h-8 w-8 relative overflow-hidden">
                    <Image src={user.image} alt={user.name} fill />
                </div>
                <div
                    onClick={() => setOpen(true)}
                    className="h-[56px] flex-1 flex items-center  py-2 px-3 bg-[#F7F5F5]
                     rounded-[12px] cursor-pointer"
                >
                    <span className="text-primary-grey font-semibold">
                        Write a post
                    </span>
                </div>
            </div>

            <PostModal user={user} setIsOpen={setOpen} isOpen={open} />
        </div>
    );
};

export default makePost;
