<template>
  <div class="add-planning-item">
    <form @submit="submit($event)">
      <div class="form-content">
        <div class="form-group" :class="{ errored: errors.title }">
          <label for="title">Titre</label>
          <input type="text" name="title" v-model="planningItem.title" />
          <p class="text-danger" v-if="errors.title">
            {{ errors.title }}
          </p>
        </div>
        <div class="form-group" :class="{ errored: errors.startDate }">
          <label for="endDate">Date Début</label>
          <input
            type="datetime-local"
            name="startDate"
            v-model="planningItem.startDate"
          />
          <p class="text-danger" v-if="errors.startDate">
            {{ errors.startDate }}
          </p>
        </div>
        <div class="form-group" :class="{ errored: errors.endDate }">
          <label for="endDate">Date Fin</label>
          <input
            type="dateTime-local"
            name="endDate"
            v-model="planningItem.endDate"
          />
          <p class="text-danger" v-if="errors.endDate">
            {{ errors.endDate }}
          </p>
        </div>
        <div class="form-group" :class="{ errored: errors.description }">
          <label for="description">Description</label>
          <textarea
            v-model="planningItem.description"
            name="description"
          ></textarea>
          <p class="text-danger" v-if="errors.description">
            {{ errors.description }}
          </p>
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">Valider</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { IPlanningItem } from "@/types/planning-item.model";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  app: "add-planning-item",
  data() {
    return {
      planningItem: {
        title: "",
        startDate: null,
        endDate: null,
        description: "",
      } as IPlanningItem,
      errors: {
        hasError: false,
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPlanningItem"]),
    submit(event: Event) {
      event.preventDefault();
      const dataToSend = {
        ...this.planningItem,
        startDate:
          this.planningItem.startDate && new Date(this.planningItem.startDate),
        endDate:
          this.planningItem.endDate && new Date(this.planningItem.endDate),
      };
      for (let key in dataToSend) {
        (this.errors as any)[key] = !dataToSend[key as keyof IPlanningItem]
          ? "Ce champ est obligatoire"
          : "";
      }

      if (Object.values(this.errors).every((a) => !a)) {
        this.addPlanningItem(dataToSend);
      }
      console.log(this.planningItem, this.errors);
    },
  },
});
</script>

<style scoped lang="scss">
.footer {
  margin-top: 1em;
  .btn {
    width: 100%;
  }
}

.form-content {
  margin-top: 0.5em;
}
</style>
