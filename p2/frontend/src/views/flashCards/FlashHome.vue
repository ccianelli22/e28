<template>
	<div class="container mx-auto text-center">
		<h3 class="text-xl font-semibold underline">
			Flash Cards
		</h3>
		<div class="flex flex-col items-center">
			<router-link
				class="py-2 hover:text-blue-600"
				to="/flashcards/createflashcards"
			>
				Create New Flash Card
			</router-link>
			<router-link
				class="py-2 hover:text-blue-600"
				to="/flashcards/editflashcards"
				v-if="flashCards.length > 0"
			>
				Edit Flash Cards ({{ flashCards.length || 0 }})
			</router-link>
			<router-link
				class="py-2 hover:text-blue-600"
				to="/flashcards/reviewflashcards"
				v-if="flashCards.length > 0"
			>
				Review Flash Cards ({{ flashCards.length || 0 }})
			</router-link>
			<router-view />
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { inject, onMounted } from "vue"
	export default {
		setup() {
			const flashCards = inject("flashCards")

			onMounted(async () => {
				let apiCall = await axios.get("/api/flashCards")
				let num = apiCall.data.userFlashCards.length
				if (num) {
					flashCards.value = [
						...apiCall.data.userFlashCards,
					]
				}
			})
			return { flashCards }
		},
	}
</script>

<style></style>
