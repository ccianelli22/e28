<template>
	<div class="flex items-baseline justify-center p-2 mx-auto">
		<router-link to="/math">
			<NavLink :image="calculator" title="Math" />
		</router-link>
		<router-link to="/flashcards">
			<NavLink :image="postedNote" title="Flash Cards" />
		</router-link>
	</div>
</template>

<script>
	import NavLink from "./NavLink"
	import calculator from "@/assets/calculator.png"
	import postedNote from "@/assets/postedNote.png"
	export default {
		components: { NavLink },
		setup() {
			return {
				calculator,
				postedNote,
			}
		},
	}
</script>

<style></style>
