/* eslint-disable prettier/prettier */
<template>
	<button
		class="text-sm italic underline font-semibold hover:text-purple-600 duration-300 transition my-2"
		:id="props.id"
		type="button"
		@click.prevent="modalFunc.openModal"
	>
		Show Rules
	</button>
</template>

<script>
import { inject } from "vue"
export default {
	props: {
		id: String,
	},
	setup(props) {
		const modalFunc = inject("modalFunc")
		return {
			modalFunc,
			props,
		}
	},
}
</script>
