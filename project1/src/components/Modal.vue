<template>
  <teleport to="body">
    <div
      id="modalContainer"
      class="flex overflow-y-auto top-0 flex-col bg-black text-orange-500 text-xl w-3/4 mx-48 mt-4 absolute border-2 border-gray-200 border-solid font-semibold transition opacity-0 duration-300"
    >
      <button
        class="p-1 m-1 text-sm hover:bg-black hover:text-orange-500 self-end rounded-full"
        type="button"
        @click="modalFunc.closeModal"
      >
        X
      </button>

      <h3 class="text-center text-3xl underline italic -my-4 mb-2">
        {{ props.header }}
      </h3>

      <slot name="child"></slot>
    </div>
  </teleport>
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
