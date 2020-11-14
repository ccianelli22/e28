const express = require("express")
const ObjectID = require("mongodb").ObjectID
const router = express.Router()

router.get("/", async (request, response) => {
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	//NEED TO UPDATE TO RETURN FLASHCARDS BASED ON USERNAME
	try {
		const flashCards = await collection.findOne({
			username: "test",
			userFlashCards: { $exists: true },
		})
		response.status(200).json(flashCards)
	} catch (err) {
		console.log(err)
		response.status(500).json(err)
	}
})

router.post("/", async (request, response) => {
	let data = request.body
	let { flashCardValues } = data
	flashCardValues["_id"] = ObjectID()
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	const filter = { username: "test" }
	const updateData = { $push: { userFlashCards: flashCardValues } }
	collection
		.updateOne(filter, updateData, { upsert: true })
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})

router.post("/:id", async (request, response) => {
	let data = request.body
	let { flashCardValues } = data
	let flashID = ObjectID(flashCardValues._id)
	flashCardValues["_id"] = flashID
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	const filter = { username: "test" }
	const arrayFilter = [
		{
			"elem._id": { $eq: flashID },
		},
	]

	const updateData = { $set: { "userFlashCards.$[elem]": flashCardValues } }
	collection
		.updateOne(filter, updateData, { arrayFilters: arrayFilter })
		.then((resolved) => {
			response.status(200).json(resolved)
			console.log(resolved.modifiedCount)
		})
		.catch((error) => {
			throw error
		})
})

router.delete("/:id", async (request, response) => {
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	let flashID = ObjectID(request.params.id)
	const filter = { username: "test" }
	const updateData = {
		$pull: {
			userFlashCards: {
				_id: flashID,
			},
		},
	}
	collection
		.updateOne(filter, updateData)
		.then((resolved) => response.status(200).json(resolved))
		.catch((error) => {
			throw error
		})
})
module.exports = router
