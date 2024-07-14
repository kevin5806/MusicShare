import Friends from "../components/friends";
import AddFriends from "../components/addFriends";
import { getSession } from "../server/session";
import PersonalProfile from "../components/personalProfile";

export default async function Page() {
    const session: any = await getSession();

    return (
        <>
            <h1 className="text-9xl">Dashboard</h1>

            <AddFriends userID={session.userID} />
            <PersonalProfile userID={session.userID}/>
            <Friends userID={session.userID} />
        </>
    );
}
