const dotenv = require("dotenv")
dotenv.config({ path: `${__dirname}/config/config.env` })
const express = require("express")
const MongoClient = require("mongodb").MongoClient
const app = require("./app")
const PORT = process.env.PORT || 3001

MongoClient.connect(
	process.env.MONGOURI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		app.locals.mongoDB = client
		// let x = client.db("")
		// let y = x.collection("isps")
		process.on("SIGINT", () => {
			db.close()
		})
		if (err) throw err
		//USE FOR PRODUCTION BUILD
		// app.use(express.static(path.join(__dirname.split("\\backend")[0], "frontend/build")))
		// app.get("*", (req, res) => {
		//   res.sendFile(path.join(__dirname.split("\\backend")[0], "frontend/build", "index.html"))
		// })
		app.listen(3001, () => console.log(`Express server is running on ${PORT}`))
	}
)
