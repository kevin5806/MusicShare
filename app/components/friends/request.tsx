"use client";

import { toast } from "sonner";
import Profile from "../profile";
import { Button } from "@/components/ui/button";
import { addFriend } from "@/app/server/friend/friend";

const Request = ({ userID, user, sent, friendID }: any) => {
    const cardClassName =
        "flex w-full max-w-[360px] cursor-pointer flex-col gap-y-4 rounded-2xl border border-white/10 bg-neutral-900/65 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm";

    return (
        <div className={cardClassName}>
            <span className="text-lg">
                <Profile spotify={user.spotifyUser} quality={1} size={64} />
            </span>
            <div className="flex items-center justify-center">
                {sent ? (
                    <Button
                        onClick={async () => {
                            await addFriend(userID, friendID);
                            toast.success("Added to friends");
                        }}
                        variant="secondary"
                        className="border border-emerald-300/25 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/25"
                    >
                        Accept
                    </Button>
                ) : (
                    <p className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm font-medium text-neutral-200">
                        Request Sent
                    </p>
                )}
            </div>
        </div>
    );
};

export default Request;
