"use server";

import { Resend } from "resend";

export const registerEmail = async (email: string) => {
    const resend = new Resend(process.env.RESEND_SENDING_API_KEY as string);

    await resend.emails.send({
        from: "MusicShare <no-reply@musicshare.kevinleoni.me>",
        to: email,
        subject: "New Registration",
        html: `<p>new registration${Date.now()}</p>`,
    });
};
