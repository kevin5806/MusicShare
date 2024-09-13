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
        <div className="absolute flex items-center justify-center w-full h-full p-5 top-0 left-0 z-50">
            <div className="p-4 flex flex-col gap-y-5 bg-neutral-800 w-full max-w-[1000px] h-full max-h-[600px] rounded-md shadow shadow-neutral-600">
                <div className="flex justify-between">
                    <h1 className="font-medium text-4xl">Users</h1>
                    <button onClick={() => setRender((prev: any) => !prev)}>
                        <Image
                            src="/svg/close.svg"
                            height={24}
                            width={24}
                            alt="close-icon"
                        />
                    </button>
                </div>
                <div className="flex flex-col gap-y-3 h-full overflow-y-scroll">
                    {users.map((user, index) => (
                        <div className="flex justify-between mr-5" key={index}>
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
                    <div className="flex w-full justify-center">
                        <Button
                            onClick={() => {
                                fetch();
                            }}
                            variant={"secondary"}
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
