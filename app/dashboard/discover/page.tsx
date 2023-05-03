"use client";
import { PostCard } from "@/components";
import { dummyPosts } from "@/lib/constants";
import React from "react";
import { FiSearch } from "react-icons/fi";

const page = () => {
    return (
        <div className="w-full px-5 lg:px-[34px] relative">
            <div className="flex justify-center lg:justify-end z-20 lg:sticky top-0 left-0 item-center bg-white  pt-[48px] pb-[35px]">
                <div className="flex gap-3 b w-[80%] px-[23px] py-[9px] max-w-[423px] h-[47px] rounded-[20px] bg-[#F7F5F5]">
                    <FiSearch className="text-[29px] text-primary" />
                    <input
                        type="text"
                        name="search"
                        id=""
                        placeholder="Search Post"
                        className="flex-1 text-primary-grey placeholder:text-primary font-[600] bg-transparent outline-none h-full"
                    />
                </div>
            </div>

            <div className="flex lg:flex-nowrap flex-wrap gap-[62px] mt-5">
                <div className=" lg:w-[65%] grid gap-[24px] pb-5 ">
                    {dummyPosts.map((post, index) => (
                        <PostCard post={post} key={`post_${index}`} />
                    ))}
                </div>

                <div className="w-[30%] lg:block hidden  sticky right-0 top-[20%]  h-[300px] bg-primary rounded-[20px] "></div>
            </div>
        </div>
    );
};

export default page;
