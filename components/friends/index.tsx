import { FriendSuggestion } from "@/lib/types";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
    friendSuggestion: FriendSuggestion;
}
const NewFriends: FC<Props> = ({ friendSuggestion }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3">
                <div className="h-[43px] w-[43px] relative rounded-full bg-secondary-white overflow-hidden">
                    <Image
                        src={friendSuggestion.profilePicture}
                        alt={friendSuggestion.name}
                        fill
                    />
                </div>
                <div className="flex flex-col ">
                    <span className="font-bold text-primary-white capitalize">
                        {friendSuggestion.name}
                    </span>
                    <span className="text-gray-300">
                        {friendSuggestion.accountType}
                    </span>
                </div>
            </div>
            <button className="px-[11px] font-bold bg-white text-primary-grey rounded-[16px]">
                meet
            </button>
        </div>
    );
};

export default NewFriends;
