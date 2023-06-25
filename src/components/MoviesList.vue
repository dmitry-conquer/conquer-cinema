<template>
  <div class="content-list">
    <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :item="movie" />
  </div>
</template>

<script setup>
import MovieItem from "@/components/MovieItem.vue";

defineProps({
  movies: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.content-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
</style>
