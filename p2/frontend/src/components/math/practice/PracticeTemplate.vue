<template>
	<div class="container mx-auto text-center">
		<div class="inline-flex flex-col">
			<h3 class="text-2xl font-semibold underline capitalize">
				{{ props.mathOpName }}
			</h3>
			<PracticeDifficultyInputs />
			<h5 class="p-1 text-lg font-semibold">
				Problem:
			</h5>
			<p class="p-1 text-xl" v-if="props.mathOpName !== 'exponents'">
				What is {{ problem.num1 }} {{ props.mathOp }}
				{{ problem.num2 }}?
			</p>
			<div class="p-1 text-xl" v-else>
				<span class="">What is {{ problem.num1 }}</span>
				<span class="absolute -mt-1 text-xs">
					{{ problem.num2 }}
				</span>
				<span class="pl-1">
					?
				</span>
			</div>
			<label class="font-semibold ">
				Answer:
				<input
					autocomplete="off"
					class="w-32 border-2"
					id="answer"
					type="input"
					:value="problem.userAnswer"
					@input="setUserAnswer"
					@keypress.enter="onSubmit"
				/>
			</label>

			<div>
				<button
					class="p-1 m-1 transition-colors duration-200 hover:bg-green-600 hover:text-gray-100"
					@click.prevent="onSubmit"
					v-if="problem.submitted === false"
				>
					Submit
				</button>
				<p class="text-green-700" v-if="problem.correct === true">
					Good Job!
				</p>
				<p
					class="text-red-700"
					v-if="
						problem.correct === false &&
							problem.submitted === true
					"
				>
					Good Try!
				</p>
				<p
					:class="problem.answerStyle"
					v-if="problem.submitted === true"
				>
					The answer is {{ problem.answer }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { provide, inject, reactive, onMounted } from "vue"
	import PracticeDifficultyInputs from "./PracticeDifficultyInputs"
	import getOpAnswer from "@/util/getOpAnswer"
	import getTotalPercentage from "@/util/getTotalPercentage"
	import apiPost from "@/util/apiPost"
	import createProblem from "@/util/createProblem"
	export default {
		components: { PracticeDifficultyInputs },
		props: {
			mathOpName: String,
			mathOp: String,
		},
		setup(props) {
			const scoreData = inject("scoreData")
			const selectedDifficulties = reactive({ difficulty: "easy" })

			const problem = reactive({
				num1: "",
				num2: "",
				userAnswer: "",
				answer: "",
				answerStyle: "",
				correct: false,
				attempts: 0,
				submitted: false,
			})

			onMounted(() => {
				setProblem()
			})

			const setProblem = () => {
				let [num1, num2] = createProblem(
					props.mathOpName,
					selectedDifficulties.difficulty,
				)
				problem.num1 = num1
				problem.num2 = num2
				document.getElementById("answer").focus()
				problem.submitted = false
			}

			const selectDifficulty = (e) => {
				selectedDifficulties.difficulty = e.target.value
				setProblem()
			}

			const updateScore = async () => {
				scoreData.scores[
					props.mathOpName
				].lastPracticeDate = new Date()
				scoreData.scores[props.mathOpName].attempts += 1
				if (problem.correct === true) {
					scoreData.scores[props.mathOpName].correct += 1
				}
				scoreData.totalCorrectPercent = getTotalPercentage(
					scoreData.scores,
				)
				let scores = scoreData.scores
				let postData = { username: "test", scores }
				let success = await apiPost(postData, "/api/scores")
				console.log(success.status)
			}

			const onSubmit = () => {
				let isValid = true
				if (
					problem.userAnswer === "" ||
					isNaN(Number(problem.userAnswer))
				) {
					isValid = false
					alert("Your answer must be a valid number")
				}
				if (problem.submitted === false && isValid) {
					problem.submitted = true
					const { correct, answer } = getOpAnswer(
						problem.num1,
						problem.num2,
						props.mathOpName,
						problem.userAnswer,
					)
					problem.correct = correct === 1 ? true : false
					problem.answer = answer
					problem.answerStyle =
						correct === 1
							? "text-green-700"
							: "text-red-700"
					//SEND DATA TO DB!!!!
					updateScore()
					setTimeout(() => {
						problem.userAnswer = ""
						setProblem()
						problem.submitted = false
						problem.correct = false
					}, 3000)
				}
			}

			const setUserAnswer = (e) => {
				problem.userAnswer = e.target.value
			}

			provide("selectedDifficulties", selectedDifficulties)
			provide("selectDifficulty", selectDifficulty)
			return {
				props,
				selectedDifficulties,
				setUserAnswer,
				problem,
				onSubmit,
				scoreData,
			}
		},
	}
</script>
