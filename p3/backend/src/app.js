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

const app = express()
//App Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(cookieParser(process.env.SECRETCOOKIE))
// app.use(express.json())
// app.use(isAuthenticated)

// LOGIN & REGISTRATION
app.use("/api/registration", registration)
app.use("/api/login", login)

// API route for scores
app.use("/api/scores", scores)
app.use("/api/flashCards", flashCards)

module.exports = app
