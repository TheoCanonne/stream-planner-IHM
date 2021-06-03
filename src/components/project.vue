<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <div class="likes">
      <font-awesome-icon
        class="icon-thumb"
        :icon="[project.hasConnectedUserLiked ? 'fa' : 'fas', 'thumbs-up']"
      />
      <span>{{ project.nbLikes }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IProject } from "@/types/project.model";
export default defineComponent({
  name: "project",
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/theme";
.project {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  color: $light-color;

  h3 {
    text-transform: uppercase;
  }
  .likes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 70px;
    span {
      font-size: 24px;
    }
    .icon-thumb {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
