<template>
	<div class="flex flex-col items-center">
		<span
			class="text-lg font-semibold"
			:class="getPercentStyle(scoreData.totalCorrectPercent)"
		>
			{{ scoreData.totalCorrectPercent }}%
		</span>
		<button
			class="p-1 text-sm text-gray-100"
			id="scoreModal"
			type="button"
			@click.prevent="modalFunc.openModal"
		>
			My Score
		</button>
		<teleport
			to="body"
			v-if="modal.showModal && modal.activeModalID === 'scoreModal'"
		>
			<Modal header="Scores">
				<template v-slot:child>
					<h5
						class="text-2xl text-center"
						:class="
							getPercentStyle(
								scoreData.totalCorrectPercent,
							)
						"
					>
						Total Correct:
						{{ scoreData.totalCorrectPercent }}%
					</h5>
					<!--
				This for loop  section will grab the subject and the onject associated with the specific subject
				 -->
					<div
						class="inline-flex flex-col items-center py-2 mx-auto"
						v-for="(stats,
						subject,
						index) in scoreData.scores"
						:key="index"
					>
						<h5
							class="text-2xl italic font-semibold text-blue-600 underline capitalize"
						>
							{{ subject }}
						</h5>
						<p class="text-sm">
							Attempts: {{ stats.attempts }}
						</p>
						<p class="text-sm">
							Correct: {{ stats.correct }}
						</p>
						<p class="text-sm">
							Percentage Correct:
							<span
								:class="
									getPercentStyle(
										(stats.correct /
											stats.attempts) *
											100,
									)
								"
							>
								{{
									isNaN(
										stats.correct /
											stats.attempts,
									)
										? 0
										: Math.round(
												(stats.correct /
													stats.attempts) *
													100,
										  )
								}}%
							</span>
						</p>
					</div>
					<button
						class="p-1 transition-colors duration-200 hover:bg-red-600 hover:text-gray-100"
						type="button"
						@click="resetScores"
					>
						Clear Scores
					</button>
				</template>
			</Modal>
		</teleport>
	</div>
</template>

<script>
	import { inject } from "vue"
	import Modal from "@/components/Modal"
	import apiPost from "@/util/apiPost"
	export default {
		components: { Modal },
		setup() {
			const scoreData = inject("scoreData")
			const modal = inject("modal")
			const modalFunc = inject("modalFunc")

			const resetScores = async () => {
				scoreData["totalCorrectPercent"] = 0
				for (let subject in scoreData.scores) {
					scoreData.scores[subject]["attempts"] = 0
					scoreData.scores[subject]["correct"] = 0
					scoreData.scores[subject]["lastPracticeDate"] = ""
				}

				let postData = {
					username: "test",
					scores: scoreData.scores,
				}
				let deleted = await apiPost(postData, "/api/scores")
				console.log(deleted.status)
			}

			const getPercentStyle = (percent) => {
				switch (true) {
					case percent >= 80:
						return "text-green-700"

					case percent >= 60:
						return "text-yellow-600"

					default:
						return "text-red-700"
				}
			}
			//ADD SCORE DATA TO A MODAL
			return {
				scoreData,
				modal,
				getPercentStyle,
				modalFunc,
				resetScores,
			}
		},
	}
</script>

<style></style>
