const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// New user!
const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Workouts"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
