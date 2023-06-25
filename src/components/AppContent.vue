<template>
  <div class="content">
    <h1 class="content__title main-title">{{ title }}</h1>
    <BaseSelect
      v-if="sortable"
      @select="emit('select', $event)" />
    <MoviesList
      v-if="movies.length"
      :movies="movies"
      class="content__list" />
    <BaseEmptyState
      v-else
      title="Наразі це все"
      hero-image="/images/svg/empty-nofilms.svg" />
    <AppContentNavigation :movies="movies" />
  </div>
</template>
<script setup>
import AppContentNavigation from "@/components/AppContentNavigation.vue";
import MoviesList from "@/components/MoviesList.vue";
import BaseEmptyState from "@/components/BaseEmptyState.vue";
import BaseSelect from "@/components/BaseSelect.vue";
defineProps({
  movies: {
    type: Array,
    required: true,
  },
  sortable: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  select: value => typeof value === "string",
});
</script>

<style lang="scss">
.content {
  padding-top: 40px;
}
</style>
