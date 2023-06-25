<template>
  <div class="content__empty empty-state _imw">
    <h2 class="empty-state__title">{{ title }}</h2>
    <img
      class="empty-state__image"
      :src="heroImage"
      alt="Ваш список порожній" />
    <RouterLink
      to="/"
      class="empty-state__link">
      Шукати фільми
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: {
    type: String,
    requied: true,
  },
  heroImage: {
    type: String,
    requied: true,
  },
});
</script>

<style lang="scss">
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    opacity: 0.7;
    margin-bottom: em(30, 40);
  }
  &__image {
    max-width: 60%;
  }
  &__link {
    font-size: 16px;
    font-weight: bold;
    background-color: var(--color-secondary);
    border-radius: 8px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: em(20, 20);
  }
}
</style>
