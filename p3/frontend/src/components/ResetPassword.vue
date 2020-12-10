<template>
  <div>
    <p v-if="resetInfo.error !== ''" class="text-xs text-center text-red-600">
      {{ resetInfo.error }}
    </p>
    <div
      class="flex flex-col items-center"
      v-if="resetInfo.secretKeyMatch === true"
    >
      <p class="my-2 italic font-semibold">
        Please enter your new Password.
      </p>
      <input
        class="border-2 hover:bg-blue-200"
        type="password"
        v-model="resetInfo.newPassword"
      />
      <button
        class="p-2 my-2 transition-colors duration-200 hover:bg-blue-600 hover:text-gray-100"
        @click="onSubmitNewPassword"
      >
        Submit
      </button>
    </div>
    <div class="flex flex-col items-center" v-else>
      <label class="my-2 italic font-semibold">Username</label>
      <input
        class="border-2 hover:bg-blue-200"
        @input="onInput"
        v-model="resetInfo.username"
      />
      <p class="my-2 italic font-semibold">
        What is your secret key?
      </p>
      <input
        class="border-2 hover:bg-blue-200"
        @input="onInput"
        v-model="resetInfo.secretKey"
      />
      <button
        class="p-2 my-2 transition-colors duration-200 hover:bg-blue-600 hover:text-gray-100"
        @click="onSubmitSecretKey"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import apiPost from "@/util/apiPost";
import { reactive, inject } from "vue";
export default {
  setup() {
    const modalFunc = inject("modalFunc");
    const closeModal = modalFunc.closeModal;
    const resetInfo = reactive({
      attempts: 3,
      error: "",
      newPassword: "",
      secretKeyMatch: false,
      secretKey: "",
      username: ""
    });
    const onInput = () => {
      resetInfo.error = "";
    };
    const onSubmitNewPassword = async () => {
      if (!resetInfo.newPassword) {
        resetInfo.error = "Password must be longer than 6 characters";
      } else {
        let data = {
          username: resetInfo.username,
          password: resetInfo.newPassword
        };
        let submit = await apiPost(data, "/api/resetPassword");
        if (submit.status === 200) {
          alert("Your password has been reset");
          closeModal();
        } else {
          alert("An error has occured. Please try again later");
        }
      }
    };

    const onSubmitSecretKey = async () => {
      if (!resetInfo.secretKey || !resetInfo.username) {
        resetInfo.error = "Username and Secret Key fields cannot be blank!";
      } else {
        let data = {
          username: resetInfo.username,
          secretKey: resetInfo.secretKey
        };
        try {
          let submit = await apiPost(data, "/api/secretKeyMatch");
          if (submit.status === 200) {
            resetInfo.secretKeyMatch = true;
          }
        } catch (e) {
          if (e.response.status === 405) {
            if (e.response.data.msg === "No user found") {
              alert("That username does not exist");
            } else {
              resetInfo.attempts -= 1;
              if (resetInfo.attempts === 0) {
                alert(`${resetInfo.username} has now been deleted`);
                let submit = await apiPost(data, "/api/deleteUser");
                console.log(submit);
                closeModal();
              } else {
                alert(`You have ${resetInfo.attempts} left`);
              }
            }
          }
        }
      }
    };

    return {
      resetInfo,
      onSubmitSecretKey,
      onInput,
      onSubmitNewPassword
    };
  }
};
</script>

<style></style>
