const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// New Workout!
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Select Cardio and Resistance",
        },
        name: {
            type: String,
            required: "Please name this exercise."
        },
        distance: Number,
        duration: { type: Number, required: "Please input your time in minutes." },
        weight: Number,
        sets: Number,
        reps: Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
