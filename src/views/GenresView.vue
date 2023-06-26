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
              :src="`/images/genres/${genre.id}.webp`"
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

const genres = ref([
  {
    id: 28,
    name: "Бойовик",
  },
  {
    id: 12,
    name: "Пригоди",
  },
  {
    id: 16,
    name: "Мультфільм",
  },
  {
    id: 35,
    name: "Комедія",
  },
  {
    id: 80,
    name: "Кримінал",
  },
  {
    id: 99,
    name: "Документальний",
  },
  {
    id: 18,
    name: "Драма",
  },
  {
    id: 10751,
    name: "Сімейний",
  },
  {
    id: 14,
    name: "Фентезі",
  },
  {
    id: 36,
    name: "Історичний",
  },
  {
    id: 27,
    name: "Жахи",
  },
  {
    id: 10402,
    name: "Музика",
  },
  {
    id: 9648,
    name: "Детектив",
  },
  {
    id: 10749,
    name: "Мелодрама",
  },
  {
    id: 878,
    name: "Фантастика",
  },
  {
    id: 10770,
    name: "Телефільм",
  },
  {
    id: 53,
    name: "Трилер",
  },
  {
    id: 10752,
    name: "Військовий",
  },
  {
    id: 37,
    name: "Вестерн",
  },
]);
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
