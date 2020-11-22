<template>
  <div class="container flex flex-col justify-between mx-auto flashCard">
    <div class="inline-flex flex-row justify-between p-2">
      <button
        class="p-1 hover:bg-red-600 hover:text-gray-100"
        type="button"
        @click.prevent="seeHint"
      >
        {{ showFlashCard.showHint ? "Hide " : "Show " }} Hint
      </button>
      <button
        class="p-2 px-6 hover:bg-blue-600 hover:text-gray-100"
        type="button"
        @click.prevent="seeAnswer"
      >
        {{ showFlashCard.showAnswer ? "Hide " : "Show " }}Answer
      </button>
    </div>
    <div class="container text-center">
      <div class="flex flex-col py-2">
        <p class="py-2 font-semibold">
          Question
        </p>
        <p>
          {{ currentCard.question }}
        </p>
      </div>
      <div class="flex flex-col" v-if="showFlashCard.showHint">
        <p class="py-2 font-semibold">
          Hint
        </p>
        <p>
          {{ currentCard.hint }}
        </p>
      </div>
      <div class="flex flex-col" v-if="showFlashCard.showAnswer">
        <p class="py-2 font-semibold">
          Answer
        </p>
        <p>
          {{ currentCard.answer }}
        </p>
      </div>
    </div>

    <div class="flex flex-row items-baseline justify-between p-2">
      <button
        class="p-1 hover:bg-red-600 hover:text-gray-100"
        v-if="currentCardNum.num !== 0"
        type="button"
        @click.prevent="setPreviousCard"
      >
        Previous
      </button>
      <div v-else></div>
      <button
        class="p-1 justify-self-end hover:bg-green-600 hover:text-gray-100"
        v-show="currentCardNum.num < flashCards.length - 1"
        type="button"
        @click.prevent="setNextCard"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { inject, reactive, onMounted } from "vue";
export default {
  setup() {
    const flashCards = inject("flashCards");
    console.log(flashCards);
    const currentCardNum = reactive({ num: 0 });

    const currentCard = reactive({
      hint: "",
      answer: "",
      question: ""
    });

    const showFlashCard = reactive({
      showHint: false,
      showAnswer: false
    });

    const setCurrentCard = () => {
      currentCard.hint = flashCards.value[currentCardNum.num]["hint"];
      currentCard.answer = flashCards.value[currentCardNum.num]["answer"];
      currentCard.question = flashCards.value[currentCardNum.num]["question"];
    };

    const seeAnswer = () => {
      showFlashCard.showHint = false;
      showFlashCard.showAnswer = !showFlashCard.showAnswer;
    };

    const seeHint = () => {
      showFlashCard.showHint = !showFlashCard.showHint;
      showFlashCard.showAnswer = false;
    };

    const setNextCard = () => {
      currentCardNum.num += 1;
      showFlashCard.showHint = false;
      showFlashCard.showAnswer = false;

      setCurrentCard();
    };

    const setPreviousCard = () => {
      if (currentCardNum.num !== 0) {
        currentCardNum.num -= 1;
      }
      showFlashCard.showHint = false;
      showFlashCard.showAnswer = false;
      setCurrentCard();
    };

    onMounted(() => {
      setCurrentCard();
    });

    return {
      flashCards,
      setPreviousCard,
      setNextCard,
      seeHint,
      seeAnswer,
      showFlashCard,
      currentCard,
      currentCardNum
    };
  }
};
</script>

<style scoped>
.flashCard {
  background-color: #fffc7b;
  min-height: 400px;
}
</style>
>
