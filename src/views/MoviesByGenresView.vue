<template>
  <AppContent
    :title="title"
    :sortable="true"
    @select="loadMovies($event)"
    :movies="movies" />
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppContent from "@/components/AppContent.vue";
import { getMoviesData } from "@/api";

const movies = ref([]);
const genres = ref([]);
const route = useRoute();

async function loadMovies(sort) {
  const { results } = await getMoviesData(
    "discover",
    null,
    "movie",
    route.query.page || 1,
    null,
    route.params.id,
    sort,
  );
  movies.value = results;
}

const title = ref("");
async function loadGenres() {
  const rawData = await getMoviesData("genre/movie", null, "list");
  genres.value = rawData.genres;
  title.value = genres.value.find(genre => +genre.id === +route.params.id).name;
}

loadMovies();
loadGenres();

watch(
  () => route.query.page,
  () => {
    loadMovies();
  },
);
</script>
