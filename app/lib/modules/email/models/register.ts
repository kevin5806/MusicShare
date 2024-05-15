"use server";

import { Resend } from "resend";

export const registerEmail = async (email: string) => {
    const resend = new Resend(process.env.RESEND_SENDING_API_KEY as string);

    try {
        const { data } = await resend.emails.send({
            from: "SpotiShare <no-reply@spotishare.kevinleoni.me>",
            to: email,
            subject: "New Registration",
            html: "<p>new registration</p>",
        });

        return console.log(data);
    } catch (error) {
        return console.log(error);
    }
};
