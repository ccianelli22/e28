<template>
	<div class="flex flex-col ">
		<div class="bg-black text-orange-500">
			<div class="grid grid-cols-3 text-center">
				<!-- USER INFORMATION -->
				<div class="col-span-1">
					<h1
						class="font-semibold text-lg lg:text-2xl xl:text-4xl"
					>
						{{ gameData.username }}
					</h1>
					<h3 class="font-semibold lg:text-xl xl:text-2xl">
						{{ gameData.userScore }}
					</h3>
				</div>
				<span
					class="font-semibold text-lg lg:text-2xl xl:text-4xl"
				>
					|
				</span>
				<!-- COMPUTER INFORMATION -->
				<div class="col-span-1">
					<h1 class="font-semibold text-lg xl:text-4xl">
						Computer
					</h1>
					<h3 class="font-semibold lg:text-xl xl:text-2xl">
						{{ gameData.computerScore }}
					</h3>
				</div>
			</div>
			<div class="flex flex-row items-baseline justify-evenly">
				<button
					class=" rounded m-2 p-1 hover:bg-orange-500 hover:text-black transition-colors duration-300"
				>
					<router-link to="/">
						Go Home
					</router-link>
				</button>
				<button
					id="history"
					class=" rounded m-2 p-1 hover:bg-orange-500 hover:text-black transition-colors duration-300"
					@click="modalFunc.openModal"
				>
					History
				</button>
			</div>
		</div>

		<Modal
			header="History"
			v-if="modal.showModal && modal.activeModalID === 'history'"
		>
			<template v-slot:child>
				<GameHistory></GameHistory>
			</template>
		</Modal>

		<router-view />
	</div>
</template>

<script>
import { reactive, provide } from "vue"
import Modal from "./components/Modal"
import GameHistory from "./components/GameHistory"
export default {
	components: {
		Modal,
		GameHistory,
	},
	setup() {
		const gameData = reactive({
			username: "Player-1",
			computerScore: 0,
			userScore: 0,
			round: 1,
			gameHistory: {
				mysteryWord: {},
				trivia: {},
			},
		})
		const modal = reactive({
			showModal: false,
			activeModalID: "",
		})

		const modalFunc = {
			openModal: function(e) {
				console.log(e.target)
				modal.activeModalID = e.target.id
				modal.showModal = true
				document.getElementById("app").classList.add("opacity-25")
				setTimeout(() => {
					let modalCont = document.getElementById(
						"modalContainer",
					)
					modalCont.classList.toggle("opacity-0")
				}, 50)
			},

			closeModal: function() {
				document.getElementById("app").classList.remove(
					"opacity-25",
				)
				let modalCont = document.getElementById("modalContainer")
				modalCont.classList.toggle("opacity-0")
				setTimeout(() => {
					modal.showModal = false
					modal.activeModalID = ""
				}, 300)
			},
		}
		provide("gameData", gameData)
		provide("modal", modal)
		provide("modalFunc", modalFunc)

		return {
			gameData,
			modal,
			modalFunc,
		}
	},
}
</script>

<style></style>
