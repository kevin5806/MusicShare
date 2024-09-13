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
                className="flex flex-col gap-y-3 p-5 rounded w-fit min-w-52 bg-neutral-800 cursor-pointer"
            >
                <h1 className="font-semibold text-2xl">Users</h1>

                <div className="flex flex-col gap-y-2 h-full">
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
                <div className="shadow shadow-neutral-700/50 bg-neutral-700/50 rounded-md p-1 flex justify-center">
                    <h2 className="font-semibold">
                        {usersCount} users
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Users;
