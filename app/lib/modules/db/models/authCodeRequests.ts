import mongoose, { Schema } from "mongoose";

const AuthCodeRequests_Schema = new Schema({
    state: String,

    expirationDate: {
        type: Date,
        expires: 300,
        default: Date.now,
    },
});

const AuthCodeRequests =
    mongoose.models.AuthCodeRequests ||
    mongoose.model("AuthCodeRequests", AuthCodeRequests_Schema);

export default AuthCodeRequests;