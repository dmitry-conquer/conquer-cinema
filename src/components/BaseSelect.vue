<template>
  <select
    @change="emit('select', $event.target.value)"
    class="select">
    <option
      v-for="param in SORT_PARAMS"
      :key="param.id"
      :value="param.value"
      class="select__option">
      {{ param.name }}
    </option>
  </select>
</template>

<script setup>
import { SORT_PARAMS } from "@/constants";

const emit = defineEmits({
  select: value => typeof value === "string",
});
</script>

<style lang="scss">
.select {
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--color-primary-lighter);
  border-radius: 8px;
  padding: 5px 10px;
  width: 100%;
  max-width: 190px;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  &__option {
    color: var(--color-secondary);
    background-color: var(--color-dark);
    &:not(:last-child) {
        margin-bottom: 10px;
    }
  }
  &__icon {
    width: 10px;
    height: 10px;
  }
}
</style>
