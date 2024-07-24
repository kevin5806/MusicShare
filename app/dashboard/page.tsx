import Friends from "../components/friends";
import AddFriends from "../components/addFriends";
import { getSession } from "../server/session";
import PersonalProfile from "../components/personalProfile";

export default async function Page() {
    const session: any = await getSession();

    return (
        <main className="p-5">
            <h1 className="text-9xl">Dashboard</h1>

            <div className="flex gap-3">
                <PersonalProfile userID={session.userID} />
                <AddFriends userID={session.userID} />
            </div>
            <Friends userID={session.userID} />
        </main>
    );
}
