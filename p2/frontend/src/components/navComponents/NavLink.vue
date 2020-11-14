<template>
	<div class="flex flex-col items-center p-3">
		<div>
			<img :src="image" class="w-8 h-8" />
		</div>
		<div>
			<h5 class="text-sm" v-text="title"></h5>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			image: String,
			title: String,
		},
	}
</script>

<style></style>
