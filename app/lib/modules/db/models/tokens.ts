import mongoose, { Schema } from "mongoose";

const Tokens_Schema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    token: {
        type: Object,
        required: true,
    },
});

const Tokens =
    mongoose.models.Tokens || mongoose.model("Tokens", Tokens_Schema);

export default Tokens;