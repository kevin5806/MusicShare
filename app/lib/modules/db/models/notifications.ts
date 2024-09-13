import mongoose, { Schema } from "mongoose";

const Notifications_Schema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        seen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Notifications =
    mongoose.models.Notifications ||
    mongoose.model("Notifications", Notifications_Schema);

export default Notifications;
