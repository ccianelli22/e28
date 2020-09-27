<template>
  <div class="flex flex-col">
    <button
      id="mysteryWord"
      class="text-sm italic underline font-semibold hover:text-purple-600 duration-300 transition"
      type="button"
      @click="modalFunc.openModal"
    >
      SHOW RULES
    </button>
    <div class="flex flex-col m-4" v-if="mysteryWordGame.playingGame">
      <div class="flex-1">
        <img
          id="vampire"
          class="rounded relative w-32 h-32 pr-3 duration-300 transition opacity-100"
          :src="require('../assets/mysteryWordImages/vampire.png')"
        />
        <img
          id="user"
          class="rounded float-right w-64 h-32 pr-3 duration-300 transition opacity-100"
          :src="require('../assets/mysteryWordImages/sleeping.png')"
        />
      </div>
      <div class="self-center">
        <span
          class="mx-2 text-2xl"
          v-for="(letter, index) in mysteryWordGame.hiddenWord"
          :key="index"
        >
          {{ letter }}
        </span>
      </div>
      <div
        class="flex flex-row items-baseline mt-6 self-center"
        v-if="!mysteryWordGame.winner"
      >
        <input
          class="border-2 p-2 border-gray-300 border-solid hover:bg-orange-300 duration-300 transition-colors"
          type="text"
          maxlength="1"
          v-model="mysteryWordGame.letterInput"
          @keyup.enter="submit"
        />
        <button
          class="ml-4 p-2 rounded border-2 border-gray-300 border-solid hover:bg-orange-500 duration-300 transition-colors"
          type=" button"
          @click="submit"
        >
          Submit
        </button>
      </div>
      <h3
        class="text-red-600 mt-2 text-3xl self-center font-semibold"
        v-if="mysteryWordGame.winner === 'computer'"
      >
        YOU HAVE BEEN BITTEN! THE CORRECT WORD WAS
        {{ mysteryWordGame.wordSelected }}
      </h3>
      <h3
        class="text-green-600 mt-2 text-3xl self-center font-semibold"
        v-if="mysteryWordGame.winner === 'user'"
      >
        YOU ESCAPED WITH YOUR LIFE
      </h3>
      <div class="flex flex-col items-baseline mt-6 self-center">
        <h5 class="text-xl text-red-600 font-semibold">Letters tried</h5>
        <div class="flex flex-row">
          <span
            class="text-sm mx-2 text-red-600 font-semibold"
            v-for="(letters, index) in mysteryWordGame.lettersTried"
            :key="index"
          >
            {{ letters }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center mt-20 justify-center text-lg relative top-0"
      v-else
    >
      <p class="font-semibold italic">
        How many letters do you want your word to be?
      </p>
      <div class="flex mt-4 text-center">
        <input
          class="p-2 mr-4 rounded-full border-2 border-solid border-gray-300 hover:bg-orange-300 duration-300 transition-colors"
          type="number"
          min="3"
          max="12"
          v-model="mysteryWordGame.numberFilter"
        />
        <button
          class="p-2 rounded-full border-2 border-solid border-gray-300 hover:bg-orange-500 duration-300 transition-colors"
          type="button"
          @click="startGame"
        >
          Play
        </button>
      </div>
    </div>
    <teleport
      to="body"
      v-if="modal.showModal && modal.activeModalID === 'mysteryWord'"
    >
      <Modal header="Rules">
        <template v-slot:child>
          <MysteryWordRules></MysteryWordRules>
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import { inject, reactive } from "vue";
import Modal from "../components/Modal";
import MysteryWordRules from "../components/MysteryWordRules";
import hangManWordArray from "../assets/hangmanWordArray";
const maxAttempts = 6;
export default {
  components: {
    Modal,
    MysteryWordRules
  },
  setup() {
    const gameData = inject("gameData");
    const modalFunc = inject("modalFunc");
    const modal = inject("modal");
    const mysteryWordGame = reactive({
      playingGame: false,
      numberFilter: "5",
      lettersTried: [],
      attempts: 0,
      letterInput: "",
      wordSelected: "",
      hiddenWord: "",
      winner: ""
    });
    const startGame = () => {
      let hangManWords = hangManWordArray;
      let wordArray = hangManWords.filter(
        word => word.length === Number(mysteryWordGame.numberFilter)
      );
      if (wordArray.length > 0) {
        let wordArrayLen = wordArray.length - 1;
        let randomNum = Math.round(Math.random() * wordArrayLen);
        mysteryWordGame.wordSelected = wordArray[randomNum].toUpperCase();
        mysteryWordGame.hiddenWord = new Array(
          Number(mysteryWordGame.numberFilter)
        ).fill("_");
        mysteryWordGame.playingGame = true;
        console.log(mysteryWordGame.wordSelected);
      } else {
        window.alert(
          `I do not have any ${mysteryWordGame.numberFilter} letter words. Please choose another number.`
        );
      }
    };

    const resetGame = () => {
      gameData.round += 1;
      setTimeout(() => {
        mysteryWordGame.playingGame = false;
        mysteryWordGame.lettersTried = [];
        mysteryWordGame.attempts = 0;
        mysteryWordGame.winner = "";
      }, 3000);
    };
    const updateArray = () => {
      let splitWord = [...mysteryWordGame.wordSelected];
      splitWord.forEach((letter, index) => {
        if (mysteryWordGame.letterInput.toUpperCase() === letter) {
          mysteryWordGame.hiddenWord[index] = letter;
        }
      });
    };

    const fadeLoser = imgID => {
      let img = document.getElementById(imgID);
      if (mysteryWordGame.winner === "computer") {
        img.classList.add("bg-red-600");
      }
      setTimeout(() => {
        img.classList.add("opacity-0");
        img.classList.remove("opacity-100");
      }, 700);
    };

    const submit = () => {
      // PREVENT USER FROM SUBMITTING LETTER ALREADY SUBMITTED
      if (
        mysteryWordGame.lettersTried.includes(
          mysteryWordGame.letterInput.toUpperCase()
        )
      ) {
        alert(
          `YOU HAVE ALREADY SUBMITTED ${mysteryWordGame.letterInput.toUpperCase()}.`
        );
        // PREVENT USER FROM SUBMITTING NON-LETTERS
      } else if (mysteryWordGame.letterInput.search(/[a-zA-z]/) === -1) {
        alert("YOU MAY ONLY USE LETTERS");

        //IF USERS LAST ATTEMPT AND GUESSES WRONG
      } else if (
        mysteryWordGame.wordSelected.includes(
          mysteryWordGame.letterInput.toUpperCase()
        ) === false &&
        mysteryWordGame.attempts + 1 === maxAttempts
      ) {
        gameOver("computer");

        // IF USER GUESSES ALL LETTERS CORRECTLY
      } else {
        if (
          mysteryWordGame.wordSelected.includes(
            mysteryWordGame.letterInput.toUpperCase()
          )
        ) {
          updateArray();
          if (
            mysteryWordGame.wordSelected ===
            mysteryWordGame.hiddenWord.toString().replaceAll(",", "")
          ) {
            gameOver("user");
          }
        } else {
          moveVampire();
          mysteryWordGame.attempts += 1;
        }
        mysteryWordGame.lettersTried.push(
          mysteryWordGame.letterInput.toUpperCase()
        );
      }
      mysteryWordGame.letterInput = "";
    };

    const gameOver = winner => {
      if (winner === "user") {
        document.getElementById(
          "user"
        ).src = require("../assets/mysteryWordImages/runaway.png");

        mysteryWordGame.winner = "user";
        fadeLoser("vampire");
        gameData.userScore += 1;
      } else {
        moveVampire();
        mysteryWordGame.winner = "computer";
        fadeLoser("user");
        gameData.computerScore += 1;
      }
      gameData.gameHistory.mysteryWord[`Round ${gameData.round}`] = winner;
      resetGame();
    };

    const moveVampire = () => {
      let v = document.getElementById("vampire");
      let i = 0;
      window.setInterval(() => {
        if (i < 100) {
          let vampireLMargin = Number(v.style.marginLeft.replace("px", ""));
          vampireLMargin += 2;
          v.style.marginLeft = `${vampireLMargin}px`;
          i += 1;
        } else {
          window.clearInterval();
        }
      }, 5);
    };
    return {
      gameData,
      modalFunc,
      modal,
      submit,
      mysteryWordGame,
      moveVampire,
      startGame
    };
  }
};
</script>
