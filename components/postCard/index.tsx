import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

import { IoEllipsisHorizontal } from "react-icons/io5";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    console.log(post);
    return (
        <div
            style={{
                boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="w-full px-[34px] py-[15px] relative z-0 overflow-hidden rounded-[13px] h-fit border-[0.5px] border-[#b6b1b1]"
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

                    <div className="flex flex-col">
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
                <div className="cursor-pointer">
                    <IoEllipsisHorizontal size={28} />
                </div>
            </div>

            <div className="mt-[34px]">
                <p className="text-[16px] text-primary-grey">{post.content}</p>
            </div>

            <div className="relative mt-[10px] h-[232px] w-full ">
                <Image src={post.media[0]} alt="text" fill />
            </div>
        </div>
    );
};

export default PostCard;
