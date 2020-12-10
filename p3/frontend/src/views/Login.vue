<template>
	<div class="container mx-auto my-20">
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
						name="username"
						@input="onInput"
						v-model="loginInfo.username"
					/>
				</div>
				<div class="col-span-1 my-2">
					<label class="font-semibold">Password</label>
				</div>
				<div class="col-span-2 my-2">
					<div class="flex flex-col items-center">
						<input
							class="border-2 hover:bg-blue-200"
							@input="onInput"
							name="password"
							type="password"
							v-model="loginInfo.password"
						/>
						<button
							class="text-xs text-red-600"
							id="forgotPassword"
							@click.prevent="
								modalFunc.openModal
							"
						>
							Forgot Password
						</button>
					</div>
				</div>
			</div>
			<div class="flex items-baseline my-3">
				<button
					class="p-2 mx-10 transition-colors duration-200 hover:bg-blue-600 hover:text-gray-100"
					name="signIn"
					@click.prevent="signIn"
				>
					Sign In
				</button>

				<button
					class="p-2 mx-10 transition-colors duration-200 hover:bg-green-600 hover:text-gray-100"
					id="registerModal"
					@click.prevent="modalFunc.openModal"
				>
					Register
				</button>
			</div>
		</div>
		<teleport
			to="body"
			v-if="modal.showModal && modal.activeModalID === 'registerModal'"
		>
			<Modal header="Register">
				<template v-slot:child>
					<Register />
				</template>
			</Modal>
		</teleport>
		<teleport
			to="body"
			v-if="modal.showModal && modal.activeModalID === 'forgotPassword'"
		>
			<Modal header="Reset Password">
				<template v-slot:child>
					<ResetPassword />
				</template>
			</Modal>
		</teleport>
	</div>
</template>

<script>
	import { reactive, ref, inject } from "vue"
	import apiPost from "@/util/apiPost"
	import Register from "../components/Register"
	import Modal from "../components/Modal"
	import ResetPassword from "../components/ResetPassword"
	import { useRouter } from "vue-router"
	import { useStore } from "vuex"

	export default {
		components: { Register, Modal, ResetPassword },
		setup() {
			const store = useStore()
			const router = useRouter()
			const loginInfo = reactive({
				username: "",
				password: "",
			})
			const errors = ref([])

			//Clear all errors when text field changes
			const onInput = () => {
				errors.value = []
			}
			const signIn = async () => {
				let errorFound = false
				if (!loginInfo.username) {
					errors.value.push("Username cannot be blank")
					errorFound = true
				}
				if (
					!loginInfo.password ||
					loginInfo.password.length < 6
				) {
					errors.value.push(
						"Your password must be 7 characters or longer",
					)
					errorFound = true
				}
				if (!errorFound) {
					try {
						let submit = await apiPost(
							loginInfo,
							"/api/login",
						)
						let payload = {
							loggedIn: true,
							username: loginInfo.username,
						}
						store.commit("setLoggedInStatus", payload)
						if (submit.status === 200) {
							router.push("/math")
						}
					} catch (e) {
						if (e.response.status === 404) {
							alert(e.response.data.msg)
						} else {
							alert(
								"An error has occured please try again later",
							)
							console.log(e)
						}
					}
				}
			}
			const modal = inject("modal")
			const modalFunc = inject("modalFunc")
			return {
				loginInfo,
				signIn,
				modal,
				modalFunc,
				errors,
				onInput,
			}
		},
	}
</script>

<style></style>
