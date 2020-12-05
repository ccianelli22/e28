const express = require("express")
const ObjectID = require("mongodb").ObjectID
const router = express.Router()

router.get("/:id", async (request, response) => {
	const username = request.params["id"]
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	//NEED TO UPDATE TO RETURN FLASHCARDS BASED ON USERNAME
	try {
		const flashCards = await collection.findOne({
			username,
			userFlashCards: { $exists: true },
		})
		if (!flashCards) {
			try {
				let insert = await collection.insertOne({
					username,
					userFlashCards: [],
				})
				response.status(200).json(insert.ops[0])
			} catch (err) {
				console.log(err)
			}
		} else {
			response.status(200).json(flashCards)
		}
	} catch (err) {
		console.log(err)
		response.status(500).json(err)
	}
})

router.post("/", async (request, response) => {
	let data = request.body
	let { flashCardValues, username } = data
	flashCardValues["_id"] = ObjectID()
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	const filter = { username }
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
	console.log(data)
	let { flashCardValues, username } = data
	console.log("user", username)
	let flashID = ObjectID(flashCardValues._id)
	console.log(flashID)
	flashCardValues["_id"] = flashID
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("flashCards")
	const filter = { username }
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

router.delete("/:username/:id", async (request, response) => {
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	let { id, username } = request.params
	const collection = db.collection("flashCards")
	let flashID = ObjectID(id)
	const filter = { username }
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
