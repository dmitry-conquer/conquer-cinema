<template>
  <header
    :class="{ scroll: isScrolled }"
    class="header"
    ref="header">
    <TheLogo />
    <BaseSearch
      placeholder="Пошук фільмів..."
      class="header__search" />
    <TheBurgerIcon @click="statesStore.burgerState = !statesStore.burgerState" />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import BaseSearch from "@/components/BaseSearch.vue";
import TheLogo from "@/components/TheLogo.vue";
import TheBurgerIcon from "@/components/TheBurgerIcon.vue";
import { useStatesStore } from "@/stores/states";

const statesStore = useStatesStore();

const header = ref();
const isScrolled = ref(false);

function scrollHeader() {
  if (window.scrollY > 100 && isScrolled.value === false) {
    isScrolled.value = true;
  } else if (window.scrollY < 100 && isScrolled.value === true) {
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollHeader);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHeader);
});
</script>

<style lang="scss">
.header {
  box-shadow: -1px 13px 19px -11px rgba(0, 0, 0, 0.75);
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 15px;
  height: 80px;
  background-color: var(--color-primary);
  transition: height 0.3s ease;
  padding: 0 15px;
  margin: 0 -15px;
  &.scroll {
    height: 65px;
  }
}
</style>
