// Require the mongoose ODM for MongoDB.
const mongoose = require("mongoose");

// Made a new schema. A new Exercise schema!
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({

    exercises: [ // 2 types of exercises: resistance and cardio
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            "cardio-name": {
                type: String,
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            "resistance-duration": {
                type: Number,
            }
        }
    ]
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;