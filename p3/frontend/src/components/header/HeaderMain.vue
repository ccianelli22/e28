<template>
  <div class="bg-green-400">
    <div class="flex items-center p-4">
      <router-link class="absolute w-16 h-16" to="/">
        <img src="@/assets/logo.png" />
      </router-link>
      <h2
        class="mx-auto font-serif text-3xl italic font-semibold text-center text-red-500"
      >
        V-Learning
      </h2>
      <div class="absolute right-0 pr-4">
        <HeaderScores v-if="store.state.loggedIn === true" />
      </div>
    </div>
    <button
      class="text-xs text-gray-200 "
      v-if="store.state.loggedIn === true"
      @click="logout"
    >
      Sign Out
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import HeaderScores from "./HeaderScores";

export default {
  components: {
    HeaderScores
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      let payload = {
        loggedIn: false,
        username: ""
      };
      store.commit("setLoggedInStatus", payload);
      router.push("/");
    };
    return { store, logout };
  }
};
</script>
