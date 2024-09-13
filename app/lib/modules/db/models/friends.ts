import mongoose, { Schema } from "mongoose";

const Friends_Schema = new Schema({
    userID: {
        type: String,
        require: true,
    },
    friendID: {
        type: String,
        required: true,
    },
    pending: Boolean,
    owner: String,
});

const Friends =
    mongoose.models.Friends || mongoose.model("Friends", Friends_Schema);

export default Friends;
