import Friends from "../components/friends/friends";

import { getSession } from "../server/session";
import PersonalProfile from "../components/personalProfile";

import { urbanjungle } from "../lib/fonts/fonts";
import Navbar from "../components/lib/navbar/navbar";

export default async function Page() {
    const session: any = await getSession();

    return (
        <main className="">
            <article>
                <Navbar userID={session.userID} />
            </article>
            <article className="flex flex-col gap-5 p-5">
                <span className={urbanjungle.className}>
                    <h1 className="text-8xl">Dashboard</h1>
                </span>

                <div className="flex gap-3">
                    <PersonalProfile userID={session.userID} />
                </div>
                <Friends userID={session.userID} />
            </article>
        </main>
    );
}
