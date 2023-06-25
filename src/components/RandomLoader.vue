<template>
  <div class="random">
    <h1 class="random__title main-title">Рандомайзер фільмів</h1>
    <p class="random__text">Обери випадковий фільм з тисячі найпопулярніших кінокартин.</p>
    <BaseLoader v-if="isLoading" />
    <div
      v-show="Object.keys(movie).length"
      class="random__movie movie-random">
      <RouterLink
        :to="`/cur/${movie.id}`"
        class="movie-random__image _imw">
        <img
          v-if="movie.id"
          :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
          :alt="movie.title" />
      </RouterLink>
      <h2 class="movie-random__title">
        <RouterLink :to="`/cur/${movie.id}`">{{ movie.title }} ({{ normalizedDate(movie.release_date) }})</RouterLink>
      </h2>
      <p class="movie-random__overview">{{ movie.overview }}</p>
    </div>
    <BaseButton
      v-if="!isLoading"
      @click="getRandomMovie"
      :button-type="BUTTON_TYPE_PRIMARY"
      class="random__button"
      >Пошук фільма
      <ArrowPathRoundedSquareIcon />
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import { BUTTON_TYPE_PRIMARY } from "@/constants";
import { ArrowPathRoundedSquareIcon } from "@heroicons/vue/24/outline";
import { getMoviesData } from "@/api";
import { normalizedDate } from "@/functions";

const movie = ref({});

const isLoading = ref(false);

function randomPage() {
  return Math.floor(Math.random() * 50);
}
function randomItemInPage() {
  return Math.floor(Math.random() * 20);
}

async function getRandomMovie() {
  isLoading.value = true;
  movie.value = {};
  const { results } = await getMoviesData("movie", null, "top_rated", randomPage());
  if (results[randomItemInPage()].backdrop_path === null) {
    getRandomMovie();
  } else {
    setTimeout(() => {
      movie.value = results[randomItemInPage()];
      console.log(movie.value);
      isLoading.value = false;
    }, 3000);
  }
}
</script>

<style lang="scss">
.random {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.3;
  &__text {
    font-size: 20px;
    margin-bottom: em(50, 18);
    @include av('font-size', 20, 18);
  }
  &__button {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-dark);
  }
}

.movie-random {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__image {
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    transition: all 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.04);
      }
    }
  }
  &__title {
    font-size: 25px;
    font-weight: bold;
    color: var(--color-secondary);
    margin-top: em(50, 25);
    margin-bottom: em(25, 25);
  }
  &__overview {
    max-width: 500px;
    font-size: 16px;
    line-height: 1.3;
  }
}
</style>
