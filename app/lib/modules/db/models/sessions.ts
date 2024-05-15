import mongoose, { Schema } from "mongoose";

const Sessions_Schema = new Schema({
    userID: {
        type: String,
        require: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: Date,
        expires: 7776000, // 3 mesi in secondi
        default: Date.now,
    },
});

const Sessions =
    mongoose.models.Sessions || mongoose.model("Sessions", Sessions_Schema);

export default Sessions;