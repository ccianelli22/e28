<template>
  <div
    id="modalContainer"
    class="absolute top-0 left-0 right-0 flex flex-col w-3/4 mx-auto mt-4 overflow-y-auto font-semibold transition duration-300 bg-gray-100 border-2 border-gray-200 border-solid opacity-0 lg:text-xl xl:w-3/4"
  >
    <div class="flex justify-center my-2">
      <h3 class="mb-2 text-xl italic text-center underline lg:text-3xl">
        {{ props.header }}
      </h3>
      <button
        class="absolute right-0 p-2 mx-2 text-sm duration-300 rounded-3xl hover:bg-red-500 transition-color"
        type="button"
        @click="modalFunc.closeModal"
      >
        X
      </button>
    </div>

    <slot name="child"></slot>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    header: String
  },
  setup(props) {
    const modalFunc = inject("modalFunc");
    return {
      modalFunc,
      props
    };
  }
};
</script>

<style scoped>
#modalContainer {
  max-height: 50%;
}
</style>
