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
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Get single workout by id.
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
            if (err) {
                console.error(err)
            }
            res.json(dbWorkout);
        })
    })
    // Post/Create a new workout in the database.
    app.post("/api/workouts/", function (req, res) {
        db.Workout.create({ exercise: req.body }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Update a workout with an exercise in the database by id.
    app.put("/api/workouts/:id", function (req, res) {
        var query = { _id: req.params.id };
        db.Workout.findOneAndUpdate(query, {
            $push: { exercises: [req.body] }
        }, function (err, dbWorkout) {
            if (err) {
                res.json(err);
            } else {
                res.json(dbWorkout);
            }
        })
    })
    // Delete a workout in the database.
    app.delete("/api/workouts/:id", function (req, res) {
        db.Workout.remove({
            where: {
                id: req.params.id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    // Get workouts over 7 days for stats
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })
}