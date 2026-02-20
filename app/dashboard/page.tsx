import Friends from "../components/friends/friends";

import { getSession } from "../server/session";

import { urbanjungle } from "../lib/fonts/fonts";
import Navbar from "../components/lib/navbar/navbar";

export default async function Page() {
    const session: any = await getSession();

    return (
        <main className="min-h-screen pb-8">
            <article>
                <Navbar userID={session.userID} />
            </article>
            <article className="flex flex-col gap-5 p-4 sm:p-5 md:p-6">
                <section className="panel-glass rounded-3xl p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                        Your circle, your soundtrack
                    </p>
                    <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end">
                        <span className={urbanjungle.className}>
                            <h1 className="text-6xl leading-[0.85] sm:text-7xl md:text-8xl">
                                Dashboard
                            </h1>
                        </span>
                    </div>
                </section>
                <Friends userID={session.userID} />
            </article>
        </main>
    );
}
