const express = require("express")
const ObjectID = require("mongodb").ObjectID
const router = express.Router()

router.get("/:id", async (request, response) => {
	const username = request.params["id"]
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	let score
	//NEED TO UPDATE TO RETURN SCORES BASED ON USERNAME
	try {
		const scoreResults = await collection.findOne({ username })
		if (!scoreResults) {
			let score = {
				mathScores: {
					addition: {
						attempts: 0,
						correct: 0,
					},
					subtraction: {
						attempts: 0,
						correct: 0,
					},
					multiplication: {
						attempts: 0,
						correct: 0,
					},
					exponents: {
						attempts: 0,
						correct: 0,
					},
					division: {
						attempts: 0,
						correct: 0,
					},
				},
			}
			try {
				let insert = await collection.insertOne({
					username,
					...score,
				})
				response.status(200).json(insert.ops[0])
			} catch (err) {
				console.log(err)
			}
		} else {
			response.status(200).json(scoreResults)
		}
	} catch (err) {
		console.log(err)
		response.status(500).json(err)
	}
})

router.post("/", async (request, response) => {
	let data = request.body
	let { scores, username } = data
	let updateScores = { $set: { mathScores: { ...scores } } }
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	const filter = { username }
	collection
		.updateOne(filter, updateScores)
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})
router.post("/deletescores", async (request, response) => {
	let data = request.body
	let username = data.username
	let scores = { $set: { mathScores: { ...data.scores } } }
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("mathScores")
	const filter = { username }
	collection
		.updateOne(filter, scores)
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})
module.exports = router
