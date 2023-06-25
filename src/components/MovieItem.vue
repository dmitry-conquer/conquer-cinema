<template>
  <div class="content__item item-content">
    <RouterLink
      :to="`/cur/${item.id}`"
      class="item-content__link">
      <img
        :src="normalizedImage"
        :alt="item.original_title"
        class="item-content__image" />
    </RouterLink>
    <div class="item-content__header">
      <p class="item-content__rate">{{ normalizedRate(item.vote_average) }}</p>
      <BaseButton
        :button-type="BUTTON_TYPE_FAVORITE"
        :class="{ 'is-favorite': isFavotire }"
        @click="moviesStore.toggleFavorites(item)"
        class="item-content__button">
        <HeartIcon
          :class="{ 'is-favorite': isFavotire }"
          class="item-content__button-icon" />
      </BaseButton>
    </div>
    <div class="item-content__description">
      <p class="item-content__original-title">{{ item.original_title }}</p>
      <h3 class="item-content__title">{{ item.title }}</h3>
      <p class="item-content__date">{{ item.release_date.slice(0, 4) }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMoviesStore } from "@/stores/movies";
import BaseButton from "@/components/BaseButton.vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { normalizedRate } from "@/functions";
import { BUTTON_TYPE_FAVORITE } from "@/constants";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  resolution: {
    type: String,
    required: false,
    default: "w780",
  },
});

const moviesStore = useMoviesStore();

const isFavotire = computed(() => {
  return moviesStore.favorites.find(movie => movie.id === props.item.id) ? true : false;
});

const normalizedImage = computed(() => {
  if (props.item.backdrop_path === null || props.item.backdrop_path === undefined) {
    return "https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg";
  } else {
    return `https://image.tmdb.org/t/p/${props.resolution}/${props.item.backdrop_path}`;
  }
});
</script>

<style lang="scss">
.item-content {
  height: 320px;
  position: relative;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: start;
  @media (any-hover: hover) {
    &:hover {
      .item-content__image {
        transform: scale(1.03);
      }
    }
  }
  &__image {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: auto;
  }
  &__rate {
    padding: 10px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: bold;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__description {
    background-color: var(--color-primary-opacity);
    padding: 10px 15px;
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
  }
  &__original-title {
    font-size: 14px;
    margin-bottom: em(10, 14);
  }
  &__title {
    font-size: 18px;
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: em(15, 25);
  }
  &__date {
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__button-icon {
    &_favorite {
    }
  }
}
</style>
