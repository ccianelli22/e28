import Home from "../views/Home"
import { createRouter, createWebHistory } from "vue-router"
import MysteryWord from "../views/MysteryWord"
import Blackjack from "../views/Blackjack"
import NotFound from "../components/NotFound"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		props: true,
	},
	{
		path: "/Blackjack",
		name: "Blackjack",
		component: Blackjack,
		props: true,
	},
	{
		path: "/MysteryWord",
		name: "MysteryWord",
		component: MysteryWord,
		props: true,
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
	history: createWebHistory(),
	routes,
})

export default router
