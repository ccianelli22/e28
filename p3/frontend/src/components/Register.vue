<template>
	<div class="container mx-auto">
		<div class="text-xs text-center text-red-600" v-if="errors.length > 0">
			<p v-for="(error, index) in errors" :key="index">
				{{ error }}
			</p>
		</div>
		<div class="flex flex-col items-center my-6">
			<div class="grid items-baseline grid-cols-3 place-content-center">
				<div class="col-span-1 my-2 ">
					<label class="font-semibold">Username</label>
				</div>
				<div class="col-span-2 my-2">
					<input
						class="border-2 hover:bg-blue-200"
						@input="onInput"
						name="username"
						v-model="register.username"
					/>
				</div>
				<div class="col-span-1 my-2">
					<label class="font-semibold">Password</label>
				</div>
				<div class="col-span-2 my-2">
					<input
						class="border-2 hover:bg-blue-200"
						@input="onInput"
						name="password"
						type="password"
						v-model="register.password"
					/>
				</div>
				<div class="col-span-1 my-2">
					<label class="font-semibold">Secret Key</label>
				</div>
				<div class="col-span-2 my-2">
					<input
						class="border-2 hover:bg-blue-200"
						name="secretKey"
						@input="onInput"
						v-model="register.secretKey"
					/>
				</div>
			</div>

			<button class="mx-10" @click="registerUser">
				Register
			</button>
		</div>
	</div>
</template>
<script>
	import { reactive, ref } from "vue"
	import apiPost from "@/util/apiPost"
	export default {
		setup() {
			const register = reactive({
				username: "",
				password: "",
				secretKey: "",
			})
			const errors = ref([])
			const onInput = () => {
				errors.value = []
			}
			const registerUser = () => {
				let errorFound = false
				if (!register.username) {
					errors.value.push("Username cannot be blank")
					errorFound = true
				}
				if (!register.secretKey) {
					errors.value.push("Secret Key cannot be blank")
					errorFound = true
				}
				if (!register.password || register.password.length < 6) {
					errors.value.push(
						"Your password must be 7 characters or longer",
					)
					errorFound = true
				}
				if (!errorFound) {
					let submit = apiPost(register, "/api/register")
					console.log(submit)
				}
			}
			return {
				register,
				registerUser,
				errors,
				onInput,
			}
		},
	}
</script>

<style></style>
