<template>
	<div class="bg-green-400">
		<div class="flex items-center p-4">
			<router-link class="absolute w-16 h-16" to="/">
				<img src="@/assets/logo.png" />
			</router-link>
			<h2
				class="mx-auto font-serif text-3xl italic font-semibold text-center text-red-500"
			>
				V-Learning
			</h2>
			<div class="absolute right-0 pr-4">
				<HeaderScores />
			</div>
		</div>
	</div>
</template>

<script>
	import { inject, onMounted } from "vue"
	import axios from "axios"
	import HeaderScores from "./HeaderScores"
	import getTotalPercentage from "@/util/getTotalPercentage"
	export default {
		components: {
			HeaderScores,
		},
		setup() {
			const scoreData = inject("scoreData")
			onMounted(async () => {
				//will need to update when individual users are added
				try {
					const data = await axios.get("/api/scores")
					scoreData.scores = data.data.mathScores
					//LOOP THROUGH THE MATHSCORES TO GATHER TOTAL ATTEMPTS AND DIVIDE THAT BY TOTAL CORRECT
					let percentage = getTotalPercentage(
						data.data.mathScores,
					)
					scoreData.totalCorrectPercent = isNaN(percentage)
						? 0
						: percentage
					//need to update values in the vue instance!
				} catch (e) {
					console.log(e)
				}
			})
			return { scoreData }
		},
	}
</script>
