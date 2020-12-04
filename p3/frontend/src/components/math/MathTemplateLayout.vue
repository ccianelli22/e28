<template>
  <div class="container mx-auto text-center">
    <div class="inline-flex flex-col mx-auto">
      <button
        class="my-2 text-sm italic font-semibold underline transition duration-300 hover:text-purple-600"
        :id="props.id"
        type="button"
        @click.prevent="modalFunc.openModal"
      >
        How To {{ props.header }}
      </button>
      <router-link class="hover:text-blue-600" :to="props.link">
        Practice
      </router-link>
    </div>
    <teleport
      to="body"
      v-if="modal.showModal && modal.activeModalID === props.id"
    >
      <Modal :header="props.definition">
        <template v-slot:child>
          <slot name="childComp"></slot>
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import { inject } from "vue";
import Modal from "@/components/Modal";
export default {
  props: {
    id: String,
    definition: String,
    header: String,
    link: String
  },
  components: { Modal },
  setup(props) {
    const modalFunc = inject("modalFunc");
    const modal = inject("modal");
    return {
      modal,
      modalFunc,
      props
    };
  }
};
</script>

<style></style>
