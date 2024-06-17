import { connectDB } from "@/app/lib/modules/db/db";
import Friends from "@/app/lib/modules/db/models/friends";
import Users from "@/app/lib/modules/db/models/users";
import { getSession } from "@/app/server/session";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { getUser } from "@/app/server/data";

export async function GET(req: NextRequest, { params }: any) {
    const session: any = await getSession();

    const friend: any = await getUser(params.id);

    if (friend.error) return redirect("/");

    //The one for himself
    await Friends.create({
        userID: session.userID.toString(),
        friendID: friend._id.toString(),
    });

    //The one for the friend
    await Friends.create({
        userID: friend._id.toString(),
        friendID: session.userID.toString(),
    });

    return redirect("/dashboard");
}
