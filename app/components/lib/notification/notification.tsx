"use client";
import Image from "next/image";
import Content from "./content"; // This will be a server component
import { Button } from "@/components/ui/button";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const Notification = ({ userID }: any) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/15"
                >
                    <Image
                        src="/svg/notification.svg"
                        alt="notification-icon"
                        height={20}
                        width={20}
                    />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400"></span>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="end"
                sideOffset={10}
                className="w-[360px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 p-0 text-white shadow-xl shadow-black/40"
            >
                <div className="border-b border-white/10 px-4 py-3">
                    <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-300/90">
                        Notifications
                    </h3>
                </div>
                <Content userID={userID} />
            </PopoverContent>
        </Popover>
    );
};

export default Notification;
