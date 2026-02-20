"use client";
import { useEffect, useState } from "react";
import List from "./list";
import Profile from "../profile";
import { getUsers, getUsersCount } from "@/app/server/user/user";

const Users = ({userID}: any) => {
    const [render, setRender] = useState<boolean>(false);
    const [users, setUsers]: any = useState([]);
    const [usersCount, setUsersCount]: any = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers(6, 1);
            setUsers(data);
        };

        const fetchUsersCount = async () => {
            const data = await getUsersCount();
            setUsersCount(data);
        };

        fetchUsers();
        fetchUsersCount();
    }, [userID]);

    return (
        <>
            {render && <List userID={userID} setRender={setRender} />}
            <div
                onClick={() => setRender((prev) => !prev)}
                className="panel-glass flex w-full max-w-[320px] cursor-pointer flex-col gap-y-4 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45"
            >
                <h1 className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/90">
                    Users
                </h1>

                <div className="flex h-full flex-col gap-y-3">
                    {users?.map((user: any, index: any) => (
                        <div key={index}>
                            <Profile
                                spotify={user.spotifyUser}
                                size={42}
                                quality={1}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center rounded-md border border-white/10 bg-black/20 p-1.5">
                    <h2 className="text-sm font-semibold tracking-wide text-neutral-100">
                        {usersCount} users
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Users;
