// Require the mongoose ODM for MongoDB.
const mongoose = require("mongoose");

// Made a new schema. A new Exercise schema!
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [ // 2 types of exercises: resistance and cardio
        {
            type: String,
            name: String,
            "cardio-name": String,
            distance: Number,
            duration: Number,
            weight: Number,
            sets: Number,
            reps: Number,
            "resistance-duration": Number
        }
    ]
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;