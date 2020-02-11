const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up port for server, either on Heroku or localhost:3000.
const PORT = process.env.PORT || 3000;

// This requires all of our models from the models folder.
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB_URI referenced in .env
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });


// Create a new user
db.User.create({ name: "Ernest Hemingway" })
    .then(dbUser => {
        console.log(dbUser);
    })
    .catch(({ message }) => {
        console.log(message);
    });

// Grab all workout sessions
app.get("/notes", (req, res) => {
    db.Note.find({})
        .then(dbNote => {
            res.json(dbNote);
        })
        .catch(err => {
            res.json(err);
        });
});

// Grab user
app.get("/user", (req, res) => {
    db.User.find({})
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

// Add a new workout session
app.post("/submit", ({ body }, res) => {
    db.Note.create(body)
        .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

// Get all workout sessions for a user.
app.get("/populateduser", (req, res) => {
    // TODO
    // =====
    // Write the query to grab the documents from the User collection,
    db.User.find({})
        // and populate them with any associated Notes.
        .populate("notes").then(dbNotes => {
            res.json(dbNotes);
        }).catch(err => {
            res.json(err);
        })
    // TIP: Check the models out to see how the Notes refers to the User
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});