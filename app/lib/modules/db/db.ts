"use server";

import mongoose, { Connection } from "mongoose";

let db: Connection;

export const connectDB = async (): Promise<Connection> => {
    if (db) return db;

    try {
        db = (await mongoose.connect(process.env.MONDODB_URL!)).connection;

        return db;
    } catch (err) {
        throw err;
    }
};
