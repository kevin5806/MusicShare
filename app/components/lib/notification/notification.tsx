"use client";
import Image from "next/image";
import Content from "./content"; // This will be a server component

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const Notification = ({ userID }: any) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Image
                    src="/svg/notification.svg"
                    alt="notification-icon"
                    height={24}
                    width={24}
                />
            </PopoverTrigger>
            <PopoverContent className="w-full bg-neutral-800 shadow shadow-neutral-900 text-white border-0">
                <Content userID={userID} />
            </PopoverContent>
        </Popover>
    );
};

export default Notification;
