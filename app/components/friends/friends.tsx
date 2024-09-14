"use server";

import Card from "./card";
import { getPlaybackHistory, getPlaybackState } from "@/app/server/spotify";
import Users from "../users/users";
import { getFriends } from "@/app/server/friend/friend";
import { getUser } from "@/app/server/user/user";
import Profile from "../profile";
import Request from "./request";

const Friends = async ({ userID }: any) => {
    const friends = await getFriends(userID);

    return (
        <div className="flex flex-wrap gap-3">
            <Users userID={userID} />
            {friends?.map(async (e: any, index: any) => {
                const friend: any = await getUser(e?.friendID);
                const history: any = await getPlaybackHistory(e?.friendID, 4);
                const listening: any = await getPlaybackState(e?.friendID);

                return (
                    <>
                        {e?.pending ? (
                            <>
                                {e?.owner === userID ? (
                                    <Request
                                        key={index}
                                        userID={userID}
                                        friendID={e?.friendID}
                                        user={friend}
                                        sent={false}
                                    />
                                ) : (
                                    <Request
                                        key={index}
                                        userID={userID}
                                        friendID={e?.friendID}
                                        user={friend}
                                        sent={true}
                                    />
                                )}
                            </>
                        ) : (
                            <Card
                                key={index}
                                userID={e?.friendID}
                                user={friend}
                                history={history}
                                listening={listening}
                            />
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default Friends;
