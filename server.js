const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up port for server, either on Heroku or localhost:3000.
const PORT = process.env.PORT || 3000;

// This requires userModel to create a new user.
const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB_URI referenced in .env
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// App on "submit" will create a new body?
app.post("/submit", ({ body }, res) => {
    User.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
