<template>
  <div class="planning card">
    <h2 class="title">Planning</h2>
    <div class="sub-header">
      <button class="btn btn-light">Ajouter</button>
    </div>
    <div id="calendar">
      <div class="divider"></div>

      <div class="day" v-for="day of days" :key="day">{{ day }}</div>
      <template v-for="(hour, index) of hours" :key="hour">
        <div class="hour">{{ hour }}</div>
        <div class="line" :style="{ 'grid-row': index + 2 }"></div>
      </template>

      <planning-item
        :key="item.title"
        v-for="item of planningItems"
        :description="item.description"
        :title="item.title"
        @deleteItem="deleteItem(item.title)"
        class="item"
        :style="{
          'grid-row': `${item.fromRow} / ${item.toRow}`,
          'grid-column': item.column,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import planningItem from "@/components/planning-item.vue";
import { mapGetters, mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Planning",
  components: {
    "planning-item": planningItem,
  },
  data() {
    return {
      days: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
      hours: [
        "10h00",
        "11h00",
        "12h00",
        "13h00",
        "14h00",
        "15h00",
        "16h00",
        "17h00",
        "18h00",
        "19h00",
      ],
    };
  },
  computed: {
    ...mapGetters(["planningItems"]),
  },
  methods: {
    ...mapActions(["fetchPlanning"]),
    deleteItem(id: string): void {
      console.log("Je te détruit " + id);
    },
  },
  mounted(): void {
    this.fetchPlanning();
  },
});
</script>
<style scoped lang="scss">
@import "../styles/card";
.list-items {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.planning {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sub-header {
  display: flex;
  justify-content: flex-end;
  button {
    margin-right: 20px;
  }
}

#calendar {
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(8, 1fr);
  gap: 0 20px;
  height: 100%;
  padding: 10px;

  .day {
    position: sticky;
    text-transform: uppercase;
    color: $light-color;
  }
  .hour {
    grid-column-start: 1;
    color: $light-color;
  }

  .line {
    border-top: 1px solid $light-color;
    grid-column: 2 / -1;
    min-height: 50px;
  }

  .item {
    z-index: 2;
  }
}
</style>
