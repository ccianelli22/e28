<template>
	<div class="grid items-center grid-cols-2 py-2 justify-evenly">
		<label class="col-span-1 font-semibold capitalize">
			{{ props.fieldName }}
		</label>
		<textarea
			v-if="props.useTextField === 'true'"
			class="w-64 h-20 col-span-1 overflow-auto text-sm whitespace-pre-wrap border-2 resize-none hover:bg-blue-200"
			:name="props.fieldName"
			:value="props.fieldValue"
			@change="setField"
		></textarea>
		<input
			v-else
			class="w-64 col-span-1 p-1 text-sm border-2 hover:bg-blue-200"
			:name="props.fieldName"
			:value="props.fieldValue"
			@change="setField"
		/>
	</div>
</template>

<script>
	import { inject } from "vue"
	export default {
		props: {
			fieldName: String,
			fieldValue: String,
			useTextField: String,
		},
		setup(props) {
			const setField = inject("setField")
			return { props, setField }
		},
	}
</script>

<style></style>
