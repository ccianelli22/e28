<template>
	<div class="flex flex-row">
		<PracticeDifficultyLabel label="easy" checked />
		<PracticeDifficultyLabel label="medium" />
		<PracticeDifficultyLabel label="hard" />
	</div>
</template>

<script>
	import PracticeDifficultyLabel from "./PracticeDifficultyLabel"
	export default {
		components: { PracticeDifficultyLabel },
	}
</script>
