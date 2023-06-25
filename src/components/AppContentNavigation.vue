<template>
  <div class="content-navigations">
    <BaseButton
      :disabled="route.params.page === 1"
      :button-type="BUTTON_TYPE_PRIMARY"
      @click="changePage('decrease')"
      class="content-navigations__button">
      <ChevronLeftIcon class="content-navigations__button-icon" />
    </BaseButton>
    <BaseButton
      :disabled="movies.length < 20"
      :button-type="BUTTON_TYPE_PRIMARY"
      @click="changePage('increase')"
      class="content-navigations__button">
      <ChevronRightIcon class="content-navigations__button-icon" />
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { BUTTON_TYPE_PRIMARY } from "@/constants";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

const changePage = value => {
  const currentPage = +route.query.page || 1;
  let newPage;
  if (value === "increase") {
    newPage = currentPage + 1;
  } else {
    newPage = currentPage - 1 > 0 ? currentPage : 1;
  }
  router.push({
    query: {
      page: newPage,
    },
  });
};
</script>

<style lang="scss">
.content-navigations {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  &__button {
    color: var(--color-primary);
  }
}
</style>
