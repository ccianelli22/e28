<template>
  <div class="about">
    <h1>This is for BLACKJACK page {{}}</h1>
    <button class="p-2 bg-blue-300" @click="testing" type="button">
      TEST
    </button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const gameData = inject("gameData");
    const testing = () => {
      gameData.computerScore += 1;
    };
    return {
      gameData,
      testing
    };
  }
};
</script>
