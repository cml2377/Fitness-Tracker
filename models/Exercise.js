// Require the mongoose ODM for MongoDB.
const mongoose = require("mongoose");

// Made a new schema. A new Exercise schema!
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
    type: {
        type: String,
        enum: ["Cardio", "Resistance"],
        required: "Select Cardio and Resistance",
    },
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;