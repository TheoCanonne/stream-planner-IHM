<template>
  <div class="home">
    <planning id="planning" />
    <project-list id="projectList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projectList from "@/components/project-list.vue";
import planning from "@/components/planning.vue";

export default defineComponent({
  name: "Home",
  components: {
    "project-list": projectList,
    planning,
  },
});
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 25px;
}

#planning {
  flex: 1 1 70%;
}

#projectList {
  flex: 1 1 30%;
}
</style>
