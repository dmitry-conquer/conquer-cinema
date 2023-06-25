<template>
  <div class="content">
    <BaseSection
      v-for="section in homeSections"
      :key="section.title"
      :sectionData="section"
      class="section" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseSection from "../components/BaseSection.vue";
import { getMoviesData } from "@/api";

const isLoaded = ref(false);

const homeSections = ref([
  {
    title: "Популярні",
    slides: 1,
    list: [],
    link: "/popular",
    searchParam: "popular",
    resolution: "w1280",
  },
  {
    title: "З найвищою оцінкою",
    slides: 4,
    list: [],
    link: "/top-rated",
    searchParam: "top_rated",
    resolution: "w780",
  },
  {
    title: "Зараз дивляться",
    slides: 4,
    list: [],
    link: "/now-watching",
    searchParam: "now_playing",
    resolution: "w780",
  },
  {
    title: "Скоро з'являться",
    slides: 4,
    list: [],
    link: "/coming-soon",
    searchParam: "upcoming",
    resolution: "w780",
  },
]);

async function loadMovies() {
  for (const section of homeSections.value) {
    const { results } = await getMoviesData("movie", null, section.searchParam);
    section.list = results;
  }
  isLoaded.value = true;
}
loadMovies();
</script>

<style lang="scss">

</style>
