import mongoose, { Schema } from "mongoose";

const Users_Schema = new Schema({
    spotifyID: {
        type: String,
        required: true,
    },
    spotifyUser: Object,
});

const Users = mongoose.models.Users || mongoose.model("Users", Users_Schema);

export default Users;
