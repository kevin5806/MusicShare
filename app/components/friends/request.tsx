"use client";

import { toast } from "sonner";
import Profile from "../profile";
import { Button } from "@/components/ui/button";
import { addFriend } from "@/app/server/friend/friend";
import { revalidateTag } from "next/cache";

const Request = ({ userID, user, sent, friendID }: any) => {
    return (
        <>
            {sent ? (
                <div className="flex flex-col gap-y-5 p-5 rounded w-fit bg-neutral-800 cursor-pointer">
                    <span className="text-lg">
                        <Profile
                            spotify={user.spotifyUser}
                            quality={1}
                            size={64}
                        />
                    </span>
                    <div className="flex items-center justify-center size-full">
                        <Button
                            onClick={async () => {
                                await addFriend(userID, friendID);
                                toast.success("Added to friends");
                            }}
                            variant="secondary"
                        >
                            Accept
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-y-5 p-5 rounded w-fit bg-neutral-800 cursor-pointer">
                    <span className="text-lg">
                        <Profile
                            spotify={user.spotifyUser}
                            quality={1}
                            size={64}
                        />
                    </span>
                    <div className="flex items-center justify-center size-full">
                        <p className="font-medium p-3 text-neutral-200">
                            Request Sent
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Request;
