<template>
	<div>
		<ul
			class="inline-flex flex-col items-start mx-auto list-disc list-inside justify-items-center"
		>
			<li
				class="py-1 hover:text-blue-600"
				v-for="(subject, index) in mathSubjects"
				:key="index"
			>
				<router-link :to="subject.link" :e2e-test="subject.name">
					{{ subject.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import mathSubjects from "./mathSubjects"
	export default {
		setup() {
			return {
				...mathSubjects,
			}
		},
	}
</script>

<style></style>
