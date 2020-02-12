// Require the mongoose ODM for MongoDB.
const mongoose = require("mongoose");

// Made a new schema. A new workout schema!
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ // 2 types of exercises: resistance and cardio
        {
            type: {
                type: String,
                trim: true,
                required: "Resistance or Cardio"
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
const workout = mongoose.model("workout", workoutSchema);
module.exports = workout;