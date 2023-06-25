<template>
  <div class="search">
    <div class="search__body">
      <input
        v-model="search"
        @input="getMovies"
        type="text"
        class="search__input"
        :placeholder="placeholder" />
      <MagnifyingGlassIcon class="search__icon" />
    </div>
    <ul
      v-if="search"
      class="search__list">
      <li
        class="search__item item-search"
        v-for="item in list"
        :key="item.id">
        <RouterLink
          :to="`/cur/${item.id}`"
          @click="search = ''"
          class="item-search__title"
          >{{ item.title }} ({{ normalizedDate(item.release_date) }})
          <span
            class="item-search__rate"
            :class="dynamicRate(item.vote_average)"
            >{{ normalizedRate(item.vote_average) }}</span
          ></RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { normalizedDate, normalizedRate } from "@/functions";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { getMoviesData } from "@/api";

defineProps({
  placeholder: {
    type: String,
    required: false,
    default: "Ваш запит...",
  },
});

const search = ref("");
const list = ref([]);

async function getMovies() {
  const rawDate = await getMoviesData("search/movie", null, null, null, search.value);
  list.value = rawDate.results;
}
function dynamicRate(rate) {
  return rate > 7 ? "item-search__rate_success" : rate > 4 ? "item-search__rate_primary" : "item-search__rate_danger";
}
</script>

<style lang="scss">
.search {
  position: relative;
  background-color: var(--color-primary-light);
  border-radius: 8px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  padding: 3px 5px;
  &__body {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    padding: 6px 10px;
    width: 100%;
    max-width: 300px;
    @media (max-width: ($sm)) {
      padding: 3px 6px;
    }
  }
  &__input {
    color: var(--color-text);
    width: 100%;
    &:focus {
      border: 0;
      outline: 0;
    }
  }
  &__icon {
    width: 23px;
    height: 23px;
  }
  &__list {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--color-primary-light);
  }
  &__item {
  }
}

.item-search {
  padding: 10px 15px;
  &__title {
    line-height: 1.3;
  }
  &__rate {
    margin-left: 10px;
    padding: 2px 6px;
    background-color: var(--color-secondary);
    color: var(--color-dark);
    border-radius: 4px;
    font-size: 12px;
    &_success {
      background-color: var(--color-success);
    }
    &_primary {
      background-color: var(--color-secondary);
    }
    &_danger {
      background-color: var(--color-danger);
    }
  }
}
</style>
