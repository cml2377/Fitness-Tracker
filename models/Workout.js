const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// New Workout!
const Exercisechema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", Exercisechema);

module.exports = Workout;
