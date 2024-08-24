import { getFriends, getUser } from "@/app/server/data";
import Card from "./card";
import { getPlaybackHistory, getPlaybackState } from "@/app/server/spotify";

const Friends = async ({ userID }: any) => {
    const friends = await getFriends(userID);

    return (
        <div className="flex flex-wrap gap-3">
            {friends?.map(async (e: any, index:any) => {
                const friend = await getUser(e?.friendID);
                const history = await getPlaybackHistory(e?.friendID, 4);
                const listening = await getPlaybackState(e?.friendID);

                return (
                    <Card
                        key={index}
                        userID={e?.friendID}
                        user={friend}
                        history={history}
                        listening={listening}
                    />
                );
            })}
        </div>
    );
};

export default Friends;
