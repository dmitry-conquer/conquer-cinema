<template>
  <div class="section">
    <div class="section__header">
      <h2 class="section__title">{{ sectionData.title }}</h2>
      <RouterLink
        :to="`${sectionData.link}${route.params.id ? `/${route.params.id}` : ''}`"
        class="section__more">
        Більше...
        <ChevronRightIcon class="section__more-icon" />
      </RouterLink>
    </div>
    <Swiper
      @swiper="onSwiper"
      :breakpoints="swiperOptions.breakpoints"
      :slides-per-view="sectionData.slides"
      :space-between="25"
      class="section__slider slider">
      <SwiperSlide
        v-for="movie in sectionData.list"
        :key="movie.id">
        <MovieItem
          :item="movie"
          :resolution="sectionData.resolution" />
      </SwiperSlide>
    </Swiper>
    <div class="section__navigation slider-control">
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
</template>

<script setup>
import { ref } from "vue";
import MovieItem from "@/components/MovieItem.vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import BaseButton from "@/components/BaseButton.vue";
import { BUTTON_TYPE_PRIMARY } from "@/constants";
import { useRoute } from "vue-router";
defineProps({
  sectionData: {
    type: Object,
    requird: true,
  },
});

const route = useRoute();
const slider = ref(null);
const onSwiper = swiper => {
  slider.value = swiper;
};

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
</script>

<style lang="scss">
.section {
  &:not(:last-child) {
    margin-bottom: 70px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }
  &__title {
    font-weight: bold;
    @include av("font-size", 30, 24);
  }
  &__more {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        color: var(--color-secondary);
      }
    }
  }
  &__more-icon {
    width: 20px;
    height: 20px;
  }
  &__slider {
  }
}
.slider {
  @media (max-width: ($sm)) {
    margin: 0 -15px;
    padding: 0 15px;
  }
  &__slide {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    height: auto;
    align-items: start;
    justify-content: flex-end;
  }
  &__image {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__description {
    background-color: var(--color-primary-opacity);
    padding: 15px 20px;
    border-radius: 8px;
  }
  &__original-title {
    margin-bottom: em(10, 25);
  }
  &__rate {
    position: absolute;
    right: 15px;
    top: 15px;
    padding: 10px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: bold;
    border-radius: 8px;
  }
  &__title {
    font-size: 25px;
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: em(15, 25);
  }
  &__date {
  }
  &__overview {
    font-size: 16px;
    margin-top: em(15, 16);
    overflow: hidden;
    line-height: 1.3;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
