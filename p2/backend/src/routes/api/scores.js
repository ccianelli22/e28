const express = require("express")
const ObjectID = require("mongodb").ObjectID
const router = express.Router()

router.get("/", async (request, response) => {
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	//NEED TO UPDATE TO RETURN SCORES BASED ON USERNAME
	try {
		const score = await collection.findOne({ username: "test" })
		response.status(200).json(score)
	} catch (err) {
		console.log(err)
		response.status(500).json(err)
	}
})

router.post("/", async (request, response) => {
	let data = request.body
	let user = data.username
	let scores = { $set: { mathScores: { ...data.scores } } }
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	const filter = { username: user }
	collection
		.updateOne(filter, scores)
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})
router.post("/deletescores", async (request, response) => {
	let data = request.body
	let user = data.username
	let scores = { $set: { mathScores: { ...data.scores } } }
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	const filter = { username: user }
	collection
		.updateOne(filter, scores)
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})
module.exports = router
