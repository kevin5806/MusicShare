import Friends from "../components/friends";
import Share from "../components/share";
import { getSession } from "../server/session";

export default async function Page() {
    const session: any = await getSession();

    return (
        <>
            <h1 className="text-9xl">Dashboard</h1>

            <Share userID={session.userID} />
            <Friends userID={session.userID} />
        </>
    );
}
