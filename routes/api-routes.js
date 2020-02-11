// api routes for CRUD actions to the database.


// We need our models
//===================================================
const db = require("../models");

// Routes 
//===================================================
module.exports = function (app) {
    // Get/Read route for getting all exercises
    app.get("/api/workouts", function (req, res) {
        // getting it out of Workout.js in models.
        db.Workout.findAll({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Get single workout by id
    app.get("/api/workouts/:id", function (req, res) {
        db.Workout.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Post/Create route for creating a new workout session

}