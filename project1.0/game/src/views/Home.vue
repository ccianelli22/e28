<template>
<!-- THIS SECTION NEEDS TO BE OWN COMPONENT! -->
<Fragment>
    <div class="flex flex-col items-center my-8">
        <p class="italic my-2">
            Please enter your name
        </p>
        <input class="my-2 border-2 border-solid border-gray-300 hover:bg-blue-200" maxlength="20" v-model="gameData.username" />
        <button @click="resetGame" class="border-2 my-2 border-solid border-gray-300 rounded-lg p-1 hover:bg-red-700 hover:text-gray-100 duration-300 transition-colors" type="button">
            Reset
        </button>
    </div>
    <div class="flex flex-col items-center">
        <p>Select which game you woukld like to play!</p>
        <div class="flex flex-row justify-between">
            <button class="p-1 w-32 mx-5 rounded border-2 border-gray-300 border-solid hover:bg-orange-500 hover:text-gray-100 duration-300 transition-colors" type="button">
                <router-link to="/MysteryWord">Mystery Word</router-link>
            </button>
            <button class="p-1 w-32 mx-5 rounded border-2 border-gray-300 border-solid hover:bg-purple-600 hover:text-gray-100 duration-300 transition-colors" type="button">
                <router-link :to="{ name: 'Blackjack' }">Blackjack</router-link>
            </button>
        </div>
    </div>
</Fragment>
</template>

<script>
import {
    inject
} from "vue"
export default {
    setup() {
        const gameData = inject("gameData")

        const resetGame = () => {
            gameData.userScore = 0
            gameData.computerScore = 0
            gameData.username = "Player-1"
        }
        return {
            gameData,
            resetGame,
        }
    },
}
</script>

<style></style>
