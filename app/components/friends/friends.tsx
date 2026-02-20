"use server";

import Card from "./card";
import { getPlaybackHistory, getPlaybackState } from "@/app/server/spotify";
import Users from "../users/users";
import { getFriends } from "@/app/server/friend/friend";
import { getUser } from "@/app/server/user/user";
import Request from "./request";

const Friends = async ({ userID }: any) => {
    const friends = await getFriends(userID);

    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            <Users userID={userID} />
            {friends?.map(async (e: any, index: any) => {
                const friend: any = await getUser(e?.friendID);
                const history: any = await getPlaybackHistory(e?.friendID, 4);
                const listening: any = await getPlaybackState(e?.friendID);

                return (
                    <div key={`${e?.friendID}-${index}`}>
                        {e?.pending ? (
                            <>
                                {e?.owner === userID ? (
                                    <Request
                                        userID={userID}
                                        friendID={e?.friendID}
                                        user={friend}
                                        sent={false}
                                    />
                                ) : (
                                    <Request
                                        userID={userID}
                                        friendID={e?.friendID}
                                        user={friend}
                                        sent={true}
                                    />
                                )}
                            </>
                        ) : (
                            <Card
                                userID={e?.friendID}
                                user={friend}
                                history={history}
                                listening={listening}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Friends;
