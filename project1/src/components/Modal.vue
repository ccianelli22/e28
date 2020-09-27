<template>
	<teleport to="body">
		<div
			id="modalContainer"
			class="flex overflow-y-auto top-0 flex-col bg-black text-orange-500 w-3/4 lg:text-xl xl:w-3/4 mx-24 xl:mx-48 mt-4 absolute border-2 border-gray-200 border-solid font-semibold transition opacity-0 duration-300"
		>
			<div class="flex flex-row my-2 items-baseline">
				<h3 class="mx-auto text-xl lg:text-3xl underline italic mb-2">
					{{ props.header }}
				</h3>
				<button
					class="p-1 text-sm mx-2 hover:text-orange-500 hover:bg-black self-start transition-color duration-300 rounded-full"
					type="button"
					@click="modalFunc.closeModal"
				>
					X
				</button>
			</div>

			<slot name="child"></slot>
		</div>
	</teleport>
</template>

<script>
import { inject } from "vue"
export default {
	props: {
		header: String,
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

<style scoped>
#modalContainer {
	max-height: 50%;
}
</style>
