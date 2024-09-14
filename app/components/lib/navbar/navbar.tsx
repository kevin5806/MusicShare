"use client";

import Image from "next/image";
import Notification from "../notification/notification";

const Navbar = ({ userID }: any) => {
    return (
        <div className="flex justify-between items-center  bg-neutral-800 rounded-b-lg mx-2 p-2">
            <section>
                <Image
                    src="/svg/app-logo2.svg"
                    width={48}
                    height={48}
                    alt="app-logo"
                />
            </section>
            <section>
                <Notification userID={userID} />
            </section>
        </div>
    );
};

export default Navbar;
