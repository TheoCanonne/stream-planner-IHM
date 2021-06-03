import { IPlanningItem } from "@/types/planning-item.model";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import axios from "axios";
import environment from "@/env/environment";

export interface State {
  planningItems: IPlanningItem[];
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state(): State {
    return {
      planningItems: [] as IPlanningItem[],
    };
  },
  getters: {
    planningItems(state: State) {
      return state.planningItems;
    },
  },
  mutations: {
    updatePlanning(state: State, planningItems: IPlanningItem[]) {
      state.planningItems = planningItems.map((planningItem) => {
        const tmp = {
          ...planningItem,
          column: planningItem.startDate.getDay() + 1,
          fromRow: planningItem.startDate.getHours() - 8,
          toRow: planningItem.endDate.getHours() - 8,
        };
        return tmp;
      });
    },
  },
  actions: {
    fetchPlanning(context, payload) {
      axios.get(environment.baseUrl + "/planning").then((response) => {
        const planningItems = (response.data as IPlanningItem[]).map((e) => ({
          ...e,
          startDate: new Date(
            new Date(e.startDate).getTime() +
              new Date(e.startDate).getTimezoneOffset() * 60000
          ),
          endDate: new Date(
            new Date(e.endDate).getTime() +
              new Date(e.endDate).getTimezoneOffset() * 60000
          ),
        }));
        context.commit("updatePlanning", planningItems);
      });
    },
  },
  modules: {},
});
