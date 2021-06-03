<template>
  <div class="planning-item">
    <h3 class="title-item">{{ title }}</h3>
    <p class="description-item">{{ description }}</p>
    <div class="close-item" @click="clickClose($event)">
      <font-awesome-icon class="icon-item" icon="times" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "planning-item",
  props: {
    title: {
      type: String,
      required: true,
      default: "Titre super",
    },
    description: {
      type: String,
      required: true,
      default: "Description Super",
    },
  },
  emits: ["deleteItem"],
  methods: {
    clickClose(event: MouseEvent): void {
      this.$emit("deleteItem");
      event.preventDefault();
      event.stopImmediatePropagation();
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/theme";
.planning-item {
  background: $light-color;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: $shadow-card;
  position: relative;
}

.title-item {
  font-weight: bold;
  text-transform: uppercase;
}

.close-item {
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background: red;
  height: 25px;
  width: 25px;
  display: grid;
  place-items: center;
  cursor: pointer;
  .icon-item {
    color: white;
  }
  &:hover {
    background: lightcoral;
  }
}
</style>
