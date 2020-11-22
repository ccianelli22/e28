<template>
  <label class="px-4 font-semibold capitalize">
    {{ props.label }}
    <input
      class="ml-2"
      name="difficulty"
      @change="selectDifficulty"
      type="radio"
      :value="props.label"
      :checked="props.checked"
    />
  </label>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    label: String,
    checked: Boolean
  },
  setup(props) {
    const selectDifficulty = inject("selectDifficulty");
    return { props, selectDifficulty };
  }
};
</script>

<style></style>
