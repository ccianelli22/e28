const express = require("express")

//Middleware
const cookieParser = require("cookie-parser")
const { isAuthenticated } = require("./middleware/isAuthenticated")
const bodyParser = require("body-parser")

//Route Object to get and update scores
const scores = require("./routes/api/scores")
const flashCards = require("./routes/api/flashCards")

//Login & Registration
const registration = require("./routes/api/loginRegistration/registration")
const login = require("./routes/api/loginRegistration/login")
const deleteUser = require("./routes/api/loginRegistration/deleteUser")
const secretKeyMatch = require("./routes/api/loginRegistration/secretKeyMatch")
const resetPassword = require("./routes/api/loginRegistration/resetPassword")

const app = express()
//App Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser(process.env.SECRETCOOKIE))
app.use(express.json())
// app.use(isAuthenticated)

// LOGIN & REGISTRATION
app.use("/api/registration", registration)
app.use("/api/login", login)
app.use("/api/deleteUser", deleteUser)
app.use("/api/secretKeyMatch", secretKeyMatch)
app.use("/api/resetPassword", resetPassword)

// API route for scores
app.use("/api/scores", scores)
app.use("/api/flashCards", flashCards)

module.exports = app
