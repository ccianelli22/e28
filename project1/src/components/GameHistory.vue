<template>
<div class="flex flex-col items-center">
    <p class="italic text-xl font-semibold mt-2">
        Current Score is:
    </p>
    <div class="grid grid-cols-3 gap-6 my-2 ">
        <div class="col-span-2">
            <p class=" my-2 italic font-semibold text-purple-400">
                {{ gameData.username }}:
            </p>
            <p class="italic font-semibold">Computer:</p>
        </div>
        <div class="col-span-1 ">
            <p class="text-purple-400 my-2">{{ gameData.userScore }}</p>
            <p>{{ gameData.computerScore }}</p>
        </div>
    </div>

    <div class="flex flex-col my-3 text-center" v-for="(mValue, mKey, mIndex) in gameData.gameHistory" :key="mIndex">
        <p class="underline italic text-purple-400 font-semibold">
            {{ mKey.toUpperCase() }}
        </p>
        <ul class="list-disc">
            <li v-for="(cValue, cKey, cIndex) in mValue" :key="cIndex">
                {{ cKey }}: {{ cValue.toUpperCase() }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    inject
} from "vue"
export default {
    setup() {
        const gameData = inject("gameData")
        return {
            gameData,
        }
    },
}
</script>

<style></style>
