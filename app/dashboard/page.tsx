import { getSession } from "../lib/server/session"

export default async function Page() {

    const session:any = await getSession();

    console.log(session);
    

    return (
        <>
            <h1 className="text-9xl">Dashboard</h1>
        </>
    )
}