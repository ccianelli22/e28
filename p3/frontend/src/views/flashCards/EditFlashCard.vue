<template>
  <div class="container mx-auto text-center">
    <p v-show="submitSuccess" class="italic font-semibold text-green-600">
      Successfully {{ apiResult }}
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

      <div class="flex flex-row justify-around" v-if="submitSuccess === false">
        <button
          class="w-64 transition-colors hover:bg-green-600 hover:text-gray-100 "
          type="button"
          @click.prevent="submitFlash"
        >
          Submit
        </button>
        <button
          class="w-64 transition-colors hover:bg-red-600 hover:text-gray-100 "
          type="button"
          @click.prevent="deleteFlash"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import apiPost from "@/util/apiPost";
import axios from "axios";
import FlashInputField from "@/components/flashCards/FlashInputField";

export default {
  components: { FlashInputField },
  setup() {
    const router = useRouter();
    const flashCards = inject("flashCards");
    let apiResult = ref("");
    let splitLocation = window.location.href.split("/");
    let id = Number(splitLocation[splitLocation.length - 1]);
    const submitSuccess = ref(false);
    const fieldError = reactive({ isError: false, errorMessage: "" });
    const flashCardValues = reactive({
      question: flashCards.value[id]["question"],
      hint: flashCards.value[id]["hint"],
      answer: flashCards.value[id]["answer"],
      _id: flashCards.value[id]["_id"]
    });

    const setField = e => {
      fieldError.isError = false;
      fieldError.errorMessage = "";
      const { name, value } = e.target;
      flashCardValues[name] = value;
    };

    const deleteFlash = async () => {
      let confirmation = window.confirm(
        "Are you sure you want to delete this card?\nPress Ok to delete."
      );
      if (confirmation) {
        submitSuccess.value = true;
        flashCards.value.splice(id, 1);
        console.log(flashCards.value);
        let success = await axios.delete(
          `/api/flashCards/${flashCardValues["_id"]}`
        );
        apiResult.value = "Deleted";
        console.log(success);

        setTimeout(() => {
          router.push("/flashcards");
        }, 3000);
      }
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
        apiResult.value = "Submitted";
        let postData = {
          username: "test",
          flashCardValues
        };
        let success = await apiPost(postData, `/api/flashCards/${id}`);
        console.log("MODIFIED:", success.data.nModified);
        setTimeout(() => {
          router.push("/flashcards");
        }, 3000);
      }
    };

    provide("setField", setField);

    return {
      flashCardValues,
      submitFlash,
      submitSuccess,
      fieldError,
      deleteFlash,
      apiResult
    };
  }
};
</script>

<style></style>
