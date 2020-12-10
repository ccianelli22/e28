<template>
  <div class="container mx-auto text-center">
    <p v-show="submitSuccess" class="italic font-semibold text-green-600">
      Successfully Submitted
    </p>
    <p v-show="fieldError.isError" class="italic font-semibold text-red-600">
      {{ fieldError.errorMessage }}
    </p>
    <div class="flex flex-col items-center">
      <FlashInputField
        fieldName="question"
        :fieldValue="flashCardValues.question"
        useTextField="true"
      />
      <FlashInputField
        fieldName="hint"
        :fieldValue="flashCardValues.hint"
        useTextField="false"
      />
      <FlashInputField
        fieldName="answer"
        :fieldValue="flashCardValues.answer"
        useTextField="true"
      />

      <button
        class="w-64 transition-colors hover:bg-green-600 hover:text-gray-100 "
        type="button"
        @click.prevent="submitFlash"
        v-if="submitSuccess === false"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { provide, reactive, ref } from "vue";
import { useStore } from "vuex";
import apiPost from "@/util/apiPost";
import FlashInputField from "@/components/flashCards/FlashInputField";

export default {
  components: { FlashInputField },
  setup() {
    const store = useStore();
    const submitSuccess = ref(false);
    const fieldError = reactive({ isError: false, errorMessage: "" });
    const flashCardValues = reactive({
      question: "",
      hint: "",
      answer: ""
    });

    const setField = e => {
      fieldError.isError = false;
      fieldError.errorMessage = "";
      const { name, value } = e.target;
      flashCardValues[name] = value;
    };

    const submitFlash = async () => {
      if (flashCardValues["hint"].trim() === flashCardValues["answer"].trim()) {
        fieldError.isError = true;
        fieldError.errorMessage = "The hint cannot be the answer!";
      }
      if (flashCardValues["answer"].length < 1) {
        fieldError.isError = true;
        fieldError.errorMessage = "The Answer Field cannot be blank.";
      }
      if (flashCardValues["question"].length < 1) {
        fieldError.isError = true;
        fieldError.errorMessage = "The Question Field cannot be blank.";
      }
      if (!fieldError.isError) {
        submitSuccess.value = true;
        let postData = {
          username: store.state.username,
          flashCardValues
        };
        let success = await apiPost(postData, `/api/flashCards`);
        console.log(success.status);
        setTimeout(() => {
          for (let key in flashCardValues) {
            flashCardValues[key] = "";
          }
          submitSuccess.value = false;
        }, 3000);
      }
    };

    provide("setField", setField);

    return { flashCardValues, submitFlash, submitSuccess, fieldError };
  }
};
</script>

<style></style>
