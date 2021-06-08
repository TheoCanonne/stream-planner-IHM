<template>
  <teleport to="#app">
    <div class="modal">
      <div class="modal-container">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "modal",
  emits: ["closeModal"],
  mounted() {
    document.addEventListener("click", this.clickHandler);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickHandler);
  },
  methods: {
    clickHandler(event: MouseEvent) {
      if ((event.target as HTMLElement).className === "modal") {
        this.$emit("closeModal");
      }
    },
  },
});
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.3);

  > .modal-container {
    background: white;
    border-radius: 5px;
    padding: 10px;
    animation: scaleIn 200ms forwards;
  }
}
</style>
