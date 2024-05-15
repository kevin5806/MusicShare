"use client";

import { enter } from "./lib/server/enter";

export default function Home() {
    const handleEnter = async () => await enter();
    return (
        <main>
            <button onClick={handleEnter}>enter</button>
        </main>
    );
}
