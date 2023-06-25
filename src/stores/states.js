import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatesStore = defineStore("statesStore", () => {
  const burgerState = ref(false);
  return {
    burgerState,
  };
});
