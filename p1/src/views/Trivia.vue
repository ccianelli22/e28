/* eslint-disable prettier/prettier */
<template>
	<div class="flex flex-col items-center">
		<RulesButton id="trivia" />
		<div class="w-full">
			<img
				class="mx-auto sticky"
				id="skeleton"
				src="../assets/triviaImages/skeletons.png"
			/>
			<p
				class="border-2 border-black border-dotted p-2 relative float-right -mt-32 mr-48 text-xl font-semibold text-green-600"
				v-if="triviaGame.winner === gameData.username"
			>
				Darn we didn't know the answer was
				<br />
				<span class="italic">{{ triviaGame.answer }}</span>
			</p>
			<p
				class="border-2 border-black border-dotted p-2 relative -mt-32 mr-56 float-right font-semibold text-red-600 text-xl"
				v-else-if="triviaGame.winner === 'computer'"
			>
				haha we knew the answer was
				<br />
				<span class="italic">{{ triviaGame.answer }}</span>
			</p>
		</div>
		<div class="flex flex-col items-center" v-if="startGame">
			<div class="self-center text-center my-2">
				<p class="font-semibold text-xl">
					Category:
					<span class="italicize mx-2 font-normal">
						{{ triviaGame.category }}
					</span>
				</p>
			</div>
			<div class="self-center my-2 text-center">
				<p class="font-semibold text-xl">
					Question
				</p>
				<p>
					{{ triviaGame.currentQuestion }}
				</p>
			</div>
			<div class="mx-auto flex flex-col">
				<div
					class="flex flex-row w-full my-2 items-baseline hover:bg-purple-600"
					v-for="(guess,
					index) in triviaGame.possibleAnswers"
					:key="index"
				>
					<label class="text-center italic">
						<input
							class="hover:bg-blue-100 mx-4"
							type="radio"
							name="radio"
							:value="guess"
							@click="changeAnswer"
						/>

						{{ guess }}
					</label>
				</div>
				<button
					class="bg-orange-500 font-semibold hover:bg-black hover:text-orange-500 xl:text-xl duration-300 transition-colors border-2 border-black border-solid rounded p-2 self-center"
					@click="submitAnswer"
					type="button"
				>
					Submit
				</button>
			</div>
		</div>

		<teleport
			to="body"
			v-if="modal.showModal && modal.activeModalID === 'trivia'"
		>
			<Modal header="Rules">
				<template v-slot:child>
					<TriviaRules></TriviaRules>
				</template>
			</Modal>
		</teleport>
	</div>
</template>

<script>
import { computed, inject, ref, reactive, onMounted, watch } from "vue"
import axios from "axios"
import Modal from "../components/Modal"
import RulesButton from "../components/RulesButton"
import TriviaRules from "../components/TriviaRules"
export default {
	components: {
		Modal,
		RulesButton,
		TriviaRules,
	},
	setup() {
		const apiError = ref(false)
		const startGame = ref(false)
		const triviaGame = reactive({
			allQuestions: [],
			currentPick: {},
			category: "",
			answer: "",
			currentQuestion: "",
			questionNum: 48,
			possibleAnswers: [],
			userAnswer: "",
			winner: "",
		})
		const gameData = inject("gameData")
		const modal = inject("modal")
		onMounted(async () => {
			try {
				let submitData = await axios.get(
					"https://opentdb.com/api.php?amount=50&encode=base64",
				)
				triviaGame.allQuestions = submitData.data.results
				startGame.value = true
				grabQuestion()
			} catch (e) {
				apiError.value = true
				console.log(e)
			}
		})

		const resetQuestionNum = (num) => {
			if (num > triviaGame.allQuestions.length - 1) {
				return 0
			}
			return num
		}

		const grabQuestion = () => {
			if (startGame.value) {
				triviaGame.questionNum = resetQuestionNum(
					triviaGame.questionNum,
				)
				console.log(triviaGame.questionNum)
				let question =
					triviaGame.allQuestions[triviaGame.questionNum]
				triviaGame.currentPick = question
				triviaGame.currentQuestion = atob(question.question)
				triviaGame.answer = atob(question.correct_answer)
				triviaGame.category = atob(question.category)
				let combinedArray = [
					atob(question.correct_answer),
					...question.incorrect_answers.map((incorrect) =>
						atob(incorrect),
					),
				]
				triviaGame.possibleAnswers = combinedArray.sort()
				triviaGame.questionNum += 1
			}
		}

		const submitAnswer = (e) => {
			if (!triviaGame.userAnswer) {
				alert("Please make a selection.")
			} else {
				if (
					triviaGame.userAnswer ===
					triviaGame.currentPick.correct_answer
				) {
					triviaGame.winner = gameData.username
					gameData.userScore += 1
				} else {
					triviaGame.winner = "computer"
					gameData.computerScore += 1
				}
				gameData.gameHistory.trivia[`Round ${gameData.round}`] =
					triviaGame.winner
				gameData.round += 1
				setTimeout(() => {
					triviaGame.userAnswer = ""
					triviaGame.winner = ""
					grabQuestion()
				}, 3000)
			}
		}

		const changeAnswer = (e) => {
			triviaGame.userAnswer = btoa(e.target.value)
		}
		return {
			gameData,
			triviaGame,
			apiError,
			modal,
			grabQuestion,
			startGame,
			submitAnswer,
			changeAnswer,
		}
	},
}
</script>
<style scoped>
#skeleton {
	height: 150px;
	width: 300px;
}
</style>
