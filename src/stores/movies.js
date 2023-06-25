import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useMoviesStore = defineStore("moviesStore", () => {
  // state
  const similar = ref([]);
  const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);

  // actions
  const toggleFavorites = async movie => {
    if (favorites.value.find(item => item.id === movie.id)) {
      const index = favorites.value.findIndex(item => item.id === movie.id);
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push({ ...movie, isFavorite: true });
    }
  };

  const removeAll = () => {
    favorites.value.splice(0, favorites.value.length);
  };

  watch(favorites.value, value => {
    localStorage.setItem("favorites", JSON.stringify(value));
  });

  return {
    similar,
    favorites,
    toggleFavorites,
    removeAll,
  };
});
