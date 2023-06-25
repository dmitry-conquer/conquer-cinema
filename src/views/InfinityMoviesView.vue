<template>
  <div class="content">
    <div class="infinity">
      <h1 class="infinity__title main-title">Нескінченний потік фільмів!</h1>
      <div class="infinity__posts">
        <MovieItem
          v-for="movie in movies"
          :key="movie.id"
          :item="movie"
          resolution="w500"
          class="infinity__post" />
        <div
          ref="observerTarget"
          class="observer"></div>
      </div>
      <BaseButton
        @click="goToTop"
        :button-type="BUTTON_TYPE_PRIMARY"
        class="infinity__up">
        <ArrowUpCircleIcon class="infinity__up-icon" />
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MovieItem from "@/components/MovieItem.vue";
import BaseButton from "@/components/BaseButton.vue";
import { BUTTON_TYPE_PRIMARY } from "@/constants";
import { ArrowUpCircleIcon } from "@heroicons/vue/24/outline";
import { getMoviesData } from "@/api";

const PER_PAGE = 5;
let page = 1;
let p = 0;

const movies = ref([]);
const observerTarget = ref();
async function loadMovies() {
  if (movies.value.length % 20 === 0 && movies.value.length > 0) {
    page++;
    p = 0;
  }
  const { results } = await getMoviesData("movie", null, "top_rated", page);
  movies.value = [...movies.value, ...results.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE)];
  p++;
}
loadMovies();

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMovies();
  }
});

function goToTop() {
  window.scrollTo({ top: 0 });
}

onMounted(() => {
  console.log(observerTarget.value);
  observer.observe(observerTarget.value);
});
</script>

<style lang="scss">
.infinity {
  &__title {
    text-align: center;
  }
  &__posts {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin: 0 auto 50px auto;
    gap: 40px 0;
  }
  &__post {
  }
  &__up {
    position: fixed;
    z-index: 999;
    bottom: 50px;
    right: 10%;
  }
  &__up-icon {
    color: var(--color-dark);
  }
}
</style>
