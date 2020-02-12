// api routes for CRUD actions to the database.


// We need our models
//===================================================
const db = require("../models");

// Routes 
//===================================================
module.exports = function (app) {
    // Get/Read route for getting all workouts.
    app.get("/api/workouts", function (req, res) {
        // getting it out of Workout.js in models.
        db.Workout.findAll({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Get single workout by id.
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
    // Post/Create a new workout in the database.
    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Update a workout in the database by id.
    app.put("/api/workouts", function (req, res) {
        db.Workout.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbWorkout) {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            })
    })
    // Delete a workout in the database.
    app.delete("/api/workouts/:id", function (req, res) {
        db.Workout.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
}