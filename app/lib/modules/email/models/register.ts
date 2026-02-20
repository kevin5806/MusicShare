"use server";

import { Resend } from "resend";

export const registerEmail = async (email: string) => {
    const resendApiKey = process.env.RESEND_SENDING_API_KEY;
    const resendDomain = process.env.RESEND_DOMAIN;

    if (!resendApiKey) throw new Error("Missing RESEND_SENDING_API_KEY");
    if (!resendDomain) throw new Error("Missing RESEND_DOMAIN");

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
        from: `MusicShare <no-reply@${resendDomain}>`,
        to: email,
        subject: "New Registration",
        html: `<p>new registration${Date.now()}</p>`,
    });
};
