<template>
  <nav class="navigation-sidebar">
    <div class="navigation-sidebar__section">
      <h2 class="navigation-sidebar__title">Меню</h2>
      <ul class="navigation-sidebar__list">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class="navigation-sidebar__item">
          <RouterLink
            @click="statesStore.burgerState = false"
            :to="item.path"
            class="navigation-sidebar__link">
            <component
              :is="item.icon"
              class="navigation-sidebar__icon" />
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navigation-sidebar__section">
      <h2 class="navigation-sidebar__title">Бібліотека</h2>
      <ul class="navigation-sidebar__list">
        <li
          v-for="item in libraryItems"
          :key="item.id"
          class="navigation-sidebar__item">
          <RouterLink
            @click="statesStore.burgerState = false"
            :to="item.path"
            class="navigation-sidebar__link">
            <component
              :is="item.icon"
              class="navigation-sidebar__icon" />
            {{ item.name }} ({{ moviesStore.favorites.length }})
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navigation-sidebar__section">
      <h2 class="navigation-sidebar__title">Інтерактив</h2>
      <ul class="navigation-sidebar__list">
        <li
          v-for="item in interactiveItems"
          :key="item.id"
          class="navigation-sidebar__item">
          <RouterLink
            @click="statesStore.burgerState = false"
            :to="item.path"
            class="navigation-sidebar__link">
            <component
              :is="item.icon"
              class="navigation-sidebar__icon" />
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { menuItems, libraryItems, interactiveItems } from "@/constants";
import { RouterLink } from "vue-router";
import { useMoviesStore } from "@/stores/movies";
import { useStatesStore } from "@/stores/states";

const moviesStore = useMoviesStore();
const statesStore = useStatesStore();
</script>

<style lang="scss">
.navigation-sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 45px;
  margin-bottom: 30px;
  &__section {
  }
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: em(20, 20);
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__item {
  }
  &__link {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    white-space: nowrap;
    transition: color 0.3s ease;
    color: var(--color-text);
    @media (any-hover: hover) {
      &:hover {
        color: var(--color-secondary);
      }
    }
    &.router-link-active {
      color: var(--color-secondary);
    }
  }
  &__icon {
    flex: 0 0 20px;
  }
}
</style>
