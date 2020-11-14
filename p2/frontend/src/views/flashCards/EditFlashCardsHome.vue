<template>
	<div class="container flex flex-col justify-center flex-grow-0 mx-auto">
		<p class="font-semibold text-center">Your Flash Cards</p>
		<div class="max-w-xl mx-auto ">
			<ol class="list-decimal list-inside">
				<li
					class="py-1"
					v-for="(flashCard, index) in flashCards"
					:key="index"
				>
					<router-link
						class="hover:text-blue-600"
						:to="
							`/flashcards/editflashcards/${index}`
						"
					>
						{{ flashCard.question }}
					</router-link>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	import { inject } from "vue"
	export default {
		setup() {
			const flashCards = inject("flashCards")
			return { flashCards }
		},
	}
</script>

<style></style>
