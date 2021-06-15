<template>
  <teleport to="#app">
    <div class="modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <font-awesome-icon class="icon-item" icon="times" />
        </div>
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
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.addEventListener("mousedown", this.clickHandler);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.clickHandler);
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
    min-width: 30%;
    background: white;
    border-radius: 5px;
    padding: 10px;
    animation: scaleIn 200ms forwards;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
