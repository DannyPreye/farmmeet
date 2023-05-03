import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";

import Comments from "../comment";
import Slider from "../Slider";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [showComments, setShowComments] = useState(false);
    return (
        <div
            style={{
                boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="w-full duration-500 px-[34px] py-[15px] relative z-0  rounded-[13px] h-fit border-[0.5px] border-[#b6b1b1]"
        >
            <div className="flex justify-between items-center ">
                <div
                    className="flex gap-3"
                    title={`${post.user.firstName} ${post.user.lastName}`}
                >
                    <Link href={"/"}>
                        <div className="w-[46px] h-[46px] relative overflow-hidden rounded-full bg-secondary-white">
                            <Image
                                src={post.user.profilePicture}
                                alt={post.user.firstName}
                                fill
                            />
                        </div>
                    </Link>

                    <div className="flex flex-col ">
                        <p className="font-bold text-[16px] text-primary-grey">
                            <span>
                                {post.user.firstName} {post.user.lastName}
                            </span>
                        </p>
                        <span className="text-[#b6b1b1] text-[12px]">
                            {" "}
                            5 mins ago
                        </span>
                    </div>
                </div>
                <div className="cursor-pointer text-primary-grey">
                    <IoEllipsisHorizontal
                        size={28}
                        onClick={() => setShowOptions((prev) => !prev)}
                    />
                    {showOptions && (
                        <div className="shadow-md absolute top-[10%] bg-secondary-white h-[200px] rounded-[12px] w-[200px] right-6 z-10"></div>
                    )}
                </div>
            </div>

            <div className="mt-[34px]">
                <p className="text-[16px] text-primary-grey">{post.content}</p>
            </div>

            <div className="relative mt-[10px] h-[232px] w-full  bg-primary-grey rounded-[5px]">
                <Slider slides={post.media} />
            </div>

            <div className="flex  items-center justify-between mt-10 border-t-[2px] py-4">
                <div className="flex items-center gap-3">
                    <CommentButton
                        setShowComments={setShowComments}
                        comments={post.comments.length}
                    />
                    <LikeButton likes={post.likes} />
                </div>
                <FaShare className="text-primary cursor-pointer text-[20px]" />
            </div>
            {showComments && (
                <div className="flex flex-col gap-4 w-full">
                    <form className="flex gap-3 w-full">
                        <div className="w-9 h-9 rounded-full relative overflow-hidden">
                            <Image
                                src={post.user.profilePicture}
                                alt={post.user.firstName}
                                fill
                            />
                        </div>
                        <div className="w-[80%] h-[47px] rounded-[20px] bg-slate-400">
                            <input
                                type="text"
                                placeholder="Write Comment"
                                className="w-full h-full placeholder:text-primary-grey px-4 py-2 bg-transparent border-none focus:outline-none"
                            />
                        </div>
                        <button className="px-4  bg-primary rounded-[20px] text-secondary-white">
                            Post
                        </button>
                    </form>
                    <Comments comments={post.comments} />
                </div>
            )}
        </div>
    );
};

export default PostCard;

function LikeButton({ likes }: { likes: number }) {
    const [like, setLike] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {};

    return (
        <div className="flex items-center gap-2 ">
            <div
                onClick={() => setIsLiked((prev) => !prev)}
                className="text-primary cursor-pointer text-[20px]"
            >
                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
            <span className="px-[8px] pointer-events-none rounded-[36px]  bg-primary text-secondary-white font-[500]  text-[12px]">
                {like}
            </span>
        </div>
    );
}

function CommentButton({
    comments,
    setShowComments,
}: {
    comments: number;
    setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [comment, setComment] = useState(comments);

    const commentHandler = () => {};

    return (
        <div className="flex items-center gap-2 ">
            <div
                onClick={() => setShowComments((prev) => !prev)}
                className="text-primary cursor-pointer text-[20px]"
            >
                <RiChat3Line />
            </div>
            <span className="px-[8px] rounded-[36px] bg-primary text-secondary-white font-[500]  text-[12px]">
                {comment}
            </span>
        </div>
    );
}
