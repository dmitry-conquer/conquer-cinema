<template>
  <div class="content">
    <div class="content__header">
      <BaseButton
        v-if="moviesStore.favorites.length"
        @click="isModalOpen = true"
        :button-type="BUTTON_TYPE_DANGER">
        <ArchiveBoxXMarkIcon />
      </BaseButton>
      <BaseModal
        @close="isModalOpen = false"
        @confirm="confirmRemove"
        :isModalOpen="isModalOpen">
        <p>Ви дійсно хочете видалити всі збережені фільми?</p>
      </BaseModal>
    </div>
    <BaseEmptyState
      title="Ой-ой! Ваш список порожній!"
      hero-image="images/svg/empty-favorites.svg"
      v-if="!moviesStore.favorites.length" />
    <MoviesList
      v-else
      class="content__list"
      :movies="moviesStore.favorites" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MoviesList from "@/components/MoviesList.vue";
import { useMoviesStore } from "@/stores/movies";
import BaseButton from "@/components/BaseButton.vue";
import { ArchiveBoxXMarkIcon } from "@heroicons/vue/24/outline";
import BaseModal from "@/components/BaseModal.vue";
import BaseEmptyState from "@/components/BaseEmptyState.vue";
import { BUTTON_TYPE_DANGER } from "@/constants";

const moviesStore = useMoviesStore();
const isModalOpen = ref(false);

function confirmRemove() {
  moviesStore.removeAll();
  isModalOpen.value = false;
}
</script>

<style lang="scss">
.content {
  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
}
</style>
