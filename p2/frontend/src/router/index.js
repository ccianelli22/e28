import { createRouter, createWebHistory } from "vue-router"
import MathHome from "../views/math/MathHome"
import MathPracticeAdd from "../views/math/practice/MathPracticeAdd"
import MathPracticeMultiply from "../views/math/practice/MathPracticeMultiply"
import MathPracticeSubtract from "../views/math/practice/MathPracticeSubtract"
import MathPracticeDivision from "../views/math/practice/MathPracticeDivision"
import MathPracticeExponents from "../views/math/practice/MathPracticeExponents"
import FlashHome from "../views/flashCards/FlashHome"
import CreateFlashCard from "../views/flashCards/CreateFlashCard"
import ReviewFlashCards from "../views/flashCards/ReviewFlashCards"
import EditFlashCardsHome from "../views/flashCards/EditFlashCardsHome"
import EditFlashCard from "../views/flashCards/EditFlashCard"
import NotFound from "../views/NotFound"

const routes = [
	{
		path: "/",
		redirect: "/math",
	},
	{
		path: "/math",
		component: MathHome,
	},
	{
		path: "/math/practice/addition",
		component: MathPracticeAdd,
	},

	{
		path: "/math/practice/multiplication",
		component: MathPracticeMultiply,
	},
	{
		path: "/math/practice/subtraction",
		component: MathPracticeSubtract,
	},
	{
		path: "/math/practice/division",
		component: MathPracticeDivision,
	},
	{
		path: "/math/practice/exponents",
		component: MathPracticeExponents,
	},
	{
		path: "/flashcards",
		component: FlashHome,
	},
	{
		path: "/flashcards/createflashcards",
		component: CreateFlashCard,
	},
	{
		path: "/flashcards/reviewflashcards",
		component: ReviewFlashCards,
	},
	{
		path: "/flashcards/editflashcards",
		component: EditFlashCardsHome,
	},
	{
		path: "/flashcards/editflashcards/:id",
		component: EditFlashCard,
	},

	//CATCH ALL WHICH RENDERS A 404 PAGE WHEN THE ROUTE WAS NOT FOUND
	{
		path: "/:pathMatch(.*)*",
		name: "Page404",

		component: NotFound,
		props: true,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
