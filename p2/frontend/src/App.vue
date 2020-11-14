<template>
	<div>
		<HeaderMain />
		<VLearnNav />
		<router-view></router-view>
	</div>
</template>

<script>
	import HeaderMain from "./components/header/HeaderMain"
	import VLearnNav from "./components/navComponents/VLearnNav"
	import { reactive, ref, provide } from "vue"
	export default {
		components: {
			HeaderMain,
			VLearnNav,
		},
		setup() {
			const modal = reactive({
				showModal: false,
				activeModalID: "",
			})
			const scoreData = reactive({
				totalCorrectPercent: null,
				scores: "",
			})

			const modalFunc = {
				openModal: function(e) {
					modal.activeModalID = e.target.id
					modal.showModal = true
					document.getElementById("app").classList.add(
						"opacity-25",
					)
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
					let modalCont = document.getElementById(
						"modalContainer",
					)
					modalCont.classList.toggle("opacity-0")
					setTimeout(() => {
						modal.showModal = false
						modal.activeModalID = ""
					}, 300)
				},
			}
			const flashCards = ref([])
			provide("flashCards", flashCards)
			provide("modal", modal)
			provide("modalFunc", modalFunc)
			provide("scoreData", scoreData)
			return {
				modal,
				modalFunc,
			}
		},
	}
</script>
