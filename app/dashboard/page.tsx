import Friends from "../components/friends/friends";
import AddFriends from "../components/addFriends";
import { getSession } from "../server/session";
import PersonalProfile from "../components/personalProfile";

import {
    ninja,
    rage,
    rust2,
    rust3,
    spray,
    unbounded,
    urbanjungle,
} from "../lib/fonts/fonts";

export default async function Page() {
    const session: any = await getSession();

    return (
        <main className="flex flex-col gap-5 p-5">
            <span className={urbanjungle.className}>
                <h1 className="text-8xl">Dashboard</h1>
            </span>

            <div className="flex gap-3">
                <PersonalProfile userID={session.userID} />
                <AddFriends userID={session.userID} />
            </div>
            <Friends userID={session.userID} />
        </main>
    );
}
