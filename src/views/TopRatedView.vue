<template>
  <AppContent
    @select="loadMovies($event)"
    title="Найбільший рейтинг"
    :movies="movies" />
</template>

<script setup>
import AppContent from "@/components/AppContent.vue";
import { ref, watch } from "vue";
import { getMoviesData } from "@/api";
import { useRoute } from "vue-router";

const route = useRoute();
const movies = ref([]);

async function loadMovies(sort) {
  const { results } = await getMoviesData("movie", null, "top_rated", route.query.page || 1, null, null, sort);
  movies.value = results;
}
loadMovies();

watch(
  () => route.query.page,
  () => {
    loadMovies();
  },
);
</script>
