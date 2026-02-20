"use client";

import Image from "next/image";
import Notification from "../notification/notification";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = ({ userID }: { userID?: string }) => {
    const pathname = usePathname();
    const isLegalPage = pathname === "/legal";
    const hasSession = Boolean(userID);
    const publicCtaHref = isLegalPage ? "/" : "/legal";
    const publicCtaLabel = isLegalPage ? "Home" : "Legal";

    return (
        <div className="sticky top-2 z-40 mx-2 mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
            <section className="flex items-center gap-3">
                <Link
                    href={hasSession ? "/dashboard" : "/"}
                    className="inline-flex items-center gap-3 no-underline"
                >
                    <Image
                        src="/svg/app-logo2.svg"
                        width={44}
                        height={44}
                        alt="app-logo"
                    />
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-300/80">
                        MusicShare
                    </p>
                </Link>
            </section>
            <section className="flex items-center gap-2">
                {hasSession ? (
                    <>
                        <Button
                            asChild
                            variant="secondary"
                            className="rounded-xl border border-white/10 bg-white/10 px-3 text-xs uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/20"
                        >
                            <Link href={`/profile/${userID}`}>My Profile</Link>
                        </Button>
                        <Notification userID={userID as string} />
                    </>
                ) : (
                    <Button
                        asChild
                        variant="secondary"
                        className="rounded-xl border border-white/10 bg-white/10 px-3 text-xs uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/20"
                    >
                        <Link href={publicCtaHref}>{publicCtaLabel}</Link>
                    </Button>
                )}
            </section>
        </div>
    );
};

export default Navbar;
