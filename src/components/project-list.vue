<template>
  <div class="project-list card">
    <h2 class="title">Projets</h2>
    <div class="projects">
      <project
        :key="project.id"
        v-for="project of projects"
        :project="project"
        class="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import project from "@/components/project.vue";
import { IProject } from "@/types/project.model";
export default defineComponent({
  name: "project-list",
  components: {
    project,
  },
  data() {
    return {
      projects: [
        { id: 0, title: "Angular", nbLikes: 10, hasConnectedUserLiked: false },
        { id: 1, title: "Vue js", nbLikes: 15, hasConnectedUserLiked: true },
        { id: 2, title: "React", nbLikes: 5 },
      ], // TODO comment typer correctement
    };
  },
});
</script>
<style scoped lang="scss">
@import "../styles/card";
@import "../styles/theme";
.projects {
  padding: 0 1em;
  .project:not(:last-child) {
    border-bottom: 1px solid $dark-border-color;
  }
}
</style>
