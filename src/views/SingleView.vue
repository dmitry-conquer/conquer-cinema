<template>
  <div class="single">
    <div class="single__content">
      <div class="single__hero _ibg">
        <img
          :src="normalizedImage"
          :alt="movie.original_title"
          class="single__image" />
        <BaseButton
          @click="moviesStore.toggleFavorites(movie)"
          :button-type="BUTTON_TYPE_FAVORITE"
          :class="{ 'is-favorite': isFavotire }"
          class="single__fav">
          <HeartIcon class="single__fav-icon" />
        </BaseButton>
      </div>
      <div class="single__description">
        <div class="single__header">
          <div class="single__original-title">{{ movie.original_title }}</div>
          <h1 class="single__title">
            {{ movie.title }} <span class="single__release">({{ normalizedDate }})</span>
          </h1>
          <div>{{ normalizedGenres }}</div>

          <div class="single__rate">{{ normalizedRate }}</div>
        </div>
        <ul class="single__list">
          <li class="single__item single__item_row">
            <h2 class="single__sub-title">Бюджет:</h2>
            <div class="single__budget">${{ movie.budget }}</div>
          </li>
          <li class="single__item">
            <h2 class="single__sub-title">Опис:</h2>
            <p class="single__overview">{{ movie.overview }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="single__section">
      <h2 class="single__section-title">Зображення</h2>
      <Swiper
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiper"
        :slides-per-view="4"
        :space-between="25"
        class="slider-single">
        <SwiperSlide
          v-for="image in images"
          :key="image.id"
          class="slider-single__slide _imw">
          <img
            :src="`https://image.tmdb.org/t/p/w500${image.file_path}`"
            alt="" />
        </SwiperSlide>
      </Swiper>
      <div class="slider-control">
        <BaseButton
          @click="slider.slidePrev()"
          :button-type="BUTTON_TYPE_PRIMARY"
          class="slider-control__button">
          <ChevronLeftIcon class="slider-control__button-icon" />
        </BaseButton>
        <BaseButton
          @click="slider.slideNext()"
          :button-type="BUTTON_TYPE_PRIMARY"
          class="slider-control__button">
          <ChevronRightIcon class="slider-control__button-icon" />
        </BaseButton>
      </div>
    </div>

    <div class="single__section">
      <h2 class="single__section-title">Трейлер</h2>
      <div class="single__video">
        <iframe
          :src="`https://www.youtube.com/embed/${trailerKey}?controls=0`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
    <BaseSection
      v-for="section in singleSections"
      :key="section.title"
      :sectionData="section"
      class="section" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "@/stores/movies";
import BaseSection from "@/components/BaseSection.vue";
import BaseButton from "@/components/BaseButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { getMoviesData } from "@/api.js";
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { BUTTON_TYPE_FAVORITE, BUTTON_TYPE_PRIMARY } from "@/constants";
const route = useRoute();
const moviesStore = useMoviesStore();

const movie = ref({});
const images = ref({});
const reviews = ref({});
const trailerKey = ref("");

const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 25,
    },
    515: {
      slidesPerView: 2.3,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
};

const singleSections = ref([
  {
    title: "Схожі",
    slides: 4,
    list: [],
    link: "/similar",
    searchParam: "similar",
    resolution: "w780",
  },
]);

const slider = ref(null);
const onSwiper = swiper => {
  slider.value = swiper;
};

const isFavotire = computed(() => {
  return moviesStore.favorites.find(movie => movie.id === movie.id) ? true : false;
});
async function loadMovies() {
  for (const section of singleSections.value) {
    const { results } = await getMoviesData("movie", route.params.id, "recommendations", 1);
    section.list = results;
  }
}
async function loadSingle() {
  movie.value = await getMoviesData("movie", route.params.id, null, null);
}
async function loadImages() {
  const rawDate = await getMoviesData("movie", route.params.id, "images", null);
  images.value = rawDate.posters;
}
async function loadReviews() {
  const rawDate = await getMoviesData("movie", route.params.id, "reviews", null);
  reviews.value = rawDate;
}
async function loadVideos() {
  const rawDate = await getMoviesData("movie", route.params.id, "videos", null);
  trailerKey.value = rawDate.results[0].key;
}

loadSingle();
loadImages();
loadVideos();
loadMovies();
loadReviews();

const normalizedGenres = computed(() => {
  return movie.value.genres
    ? movie.value.genres
        .map(object => {
          return object.name;
        })
        .join(", ")
    : [];
});

const normalizedRate = computed(() => {
  return movie.value.vote_average?.toFixed(1);
});
const normalizedDate = computed(() => {
  const date = new Date(movie.value.release_date);
  return date.toLocaleDateString();
});

const normalizedImage = computed(() => {
  if (movie.value.backdrop_path === null || movie.value.backdrop_path === undefined) {
    return "https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg";
  } else {
    return `https://image.tmdb.org/t/p/w780/${movie.value.backdrop_path}`;
  }
});

watch(
  () => route.params.id,
  () => {
    loadSingle();
    loadImages();
    loadVideos();
    loadMovies();
  },
);
</script>

<style lang="scss">
.single {
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  &__section {
  }
  &__content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 50px;
    @media (max-width: ($md)) {
      grid-template-columns: 1fr;
      grid-template-rows: 300px auto;
    }
  }
  &__hero {
    position: relative;
    padding: 7px;
  }
  &__image {
    z-index: -1;
  }
  &__video {
    height: 400px;
    max-width: 600px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  &__header {
    display: grid;
    grid-template-columns: 1fr 50px;
    gap: 7px 0;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: start;

  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  &__item {
    &_row {
      display: flex;
      align-items: flex-end;
      gap: 15px;
      .single__sub-title {
        margin-bottom: 0;
      }
    }
  }
  &__sub-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: em(10, 20);
  }
  &__section-title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: em(20, 25);
  }
  &__rate {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--color-secondary);
    color: var(--color-primary-light);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 10px 0;
  }
  &__title {
    font-size: 30px;
    font-weight: bold;
    color: var(--color-secondary);
  }
  &__release {
    font-size: 16px;
    color: var(--color-text);
    font-weight: normal;
  }
  &__overview {
    line-height: 1.3;
  }
}
.slider-single {
  height: 350px;
  @media (max-width: ($sm)) {
    margin: 0 -15px;
    padding: 0 15px;
  }
  &__slide {
    border-radius: 8px;
    overflow: hidden;
  }
}
.slider-control {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: ($md)) {
    display: none;
  }
  &__button {
    border-radius: 50%;
    flex: 0 0 35px;
    height: 35px;
    padding: 4px;
  }
  &__button-icon {
    color: var(--color-dark);
    width: 10px;
    height: 10px;
  }
}
</style>
