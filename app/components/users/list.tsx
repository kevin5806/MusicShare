"use client";

import { useEffect, useState, useRef } from "react";
import Profile from "../profile";
import Image from "next/image";
import { toast } from "sonner";
import { getUsers } from "@/app/server/user/user";
import { newFriend } from "@/app/server/friend/friend";
import { Button } from "@/components/ui/button";

const List = ({ userID, setRender }: { userID: any; setRender: any }) => {
    const [users, setUsers] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const hasFetched = useRef<boolean>(false);

    const fetch = async () => {
        const data: any = await getUsers(20, page);
        setUsers((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        if (!hasFetched.current) {
            fetch();
            hasFetched.current = true;
        }
    });

    return (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/45 p-5 backdrop-blur-sm">
            <div className="panel-glass flex h-full max-h-[600px] w-full max-w-[1000px] flex-col gap-y-5 rounded-2xl p-5">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-medium">Users</h1>
                    <button
                        onClick={() => setRender((prev: any) => !prev)}
                        className="rounded-md p-1 transition hover:bg-white/10"
                    >
                        <Image
                            src="/svg/close.svg"
                            height={24}
                            width={24}
                            alt="close-icon"
                        />
                    </button>
                </div>
                <div className="flex h-full flex-col gap-y-2 overflow-y-auto pr-2">
                    {users.map((user, index) => (
                        <div
                            className="mr-2 flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/5"
                            key={index}
                        >
                            <Profile
                                spotify={user.spotifyUser}
                                size={42}
                                quality={1}
                            />

                            {user._id !== userID && (
                                <button
                                    onClick={async () => {
                                        await newFriend(userID, user._id);
                                        toast.success(
                                            `Request sent to ${user.spotifyUser.display_name}`
                                        );
                                    }}
                                    className="rounded-md p-2 transition hover:bg-emerald-500/20"
                                >
                                    <Image
                                        src="/svg/addFriends-white.svg"
                                        height={18}
                                        width={18}
                                        alt="add-friend"
                                    />
                                </button>
                            )}
                        </div>
                    ))}
                    <div className="flex w-full justify-center pt-2">
                        <Button
                            onClick={() => {
                                fetch();
                            }}
                            variant={"secondary"}
                            className="border border-white/10 bg-white/10 hover:bg-white/20"
                        >
                            More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
