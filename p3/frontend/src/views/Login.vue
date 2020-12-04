<template>
	<div class="container mx-auto">
		<div class="flex flex-col items-center my-6">
			<div class="grid items-baseline grid-cols-3 place-content-center">
				<div class="col-span-1 my-2 ">
					<label class="font-semibold">Username</label>
				</div>
				<div class="col-span-2 my-2">
					<input
						class="border-2 hover:bg-blue-200"
						name="username"
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
							name="password"
							type="password"
							v-model="loginInfo.password"
						/>
						<p class="text-xs text-red-600">
							Forgot Password
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-baseline my-3">
				<button class="mx-10" @click.prevent="signIn">
					Sign In
				</button>

				<button
					class="mx-10"
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
	</div>
</template>

<script>
	import { reactive, inject } from "vue"
	import Register from "../components/Register"
	import Modal from "../components/Modal"

	export default {
		components: { Register, Modal },
		setup() {
			const loginInfo = reactive({
				username: "",
				password: "",
			})
			const signIn = () => {
				console.log(loginInfo.username)
			}
			const modal = inject("modal")
			const modalFunc = inject("modalFunc")
			return {
				loginInfo,
				signIn,
				modal,
				modalFunc,
			}
		},
	}
</script>

<style></style>
