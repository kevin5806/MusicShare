"use client";
import { useEffect, useState } from "react";


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { formatTime } from "../formatTime";
import { getNotifications } from "@/app/server/notification/notification";

const Content = ({ userID }: any) => {
    const [notifications, setNotifications]: any = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await getNotifications(userID);
            setNotifications(data);
        };

        fetch();
    }, [userID]);

    return (
        <Table className="rounded-md overflow-hidden">
            <TableBody>
                {notifications.map((notification: any) => (
                    <TableRow key={notification.id}>
                        <TableCell className="font-medium">
                            {notification.title}
                        </TableCell>
                        <TableCell>{notification.description}</TableCell>
                        <TableCell className="text-right">
                            {formatTime(notification.createdAt)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Content;
