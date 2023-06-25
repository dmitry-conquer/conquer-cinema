<template>
  <div class="content">
    <div class="genres">
      <h1 class="genres__title main-title">Категорії</h1>
      <ul class="genres__list">
        <li
          v-for="genre in genres"
          :key="genre.id"
          class="genres__item item-genres">
          <RouterLink
            :to="`/genres/${genre.id}`"
            class="item-genres__link">
            <img
              :src="`/images/genres/${genre.image}`"
              :alt="genre.name"
              class="item-genres__image" />
            <h2 class="item-genres__title">
              {{ genre.name }}
            </h2>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getMoviesData } from "@/api";

const genres = ref([]);

async function loadGenres() {
  const rawData = await getMoviesData("genre/movie", null, "list");
  genres.value = rawData.genres.map(genre => {
    return { ...genre, image: `${genre.id}.webp` };
  });
}
loadGenres();
</script>

<style lang="scss">
.genres {
  &__title {
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 120px;
    gap: 25px;
  }
}

.item-genres {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  @media (any-hover: hover) {
    &:hover {
      .item-genres__image {
        transform: scale(1.03);
      }
      &::after {
        opacity: 0.4;
      }
    }
  }
  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-primary);
    opacity: 0.6;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    transition: transform 0.3s ease;
  }
  &__title {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-secondary);
  }
}
</style>
