<template>
  <aside
    :class="{ 'is-open': statesStore.burgerState }"
    class="sidebar">
    <div class="sidebar__content">
      <TheSidebarNavigation />
      <TheThemeSwitcher />
    </div>
  </aside>
</template>

<script setup>
import TheSidebarNavigation from "@/components/TheSidebarNavigation.vue";
import TheThemeSwitcher from "@/components/TheThemeSwitcher.vue";
import { useStatesStore } from "@/stores/states";

const statesStore = useStatesStore();
</script>

<style lang="scss">
.sidebar {
  flex: 0 0 23%;
  box-shadow: 7px 0px 19px -11px rgba(0, 0, 0, 0.75);
  padding: 30px 15px 30px 15px;
  background-color: var(--color-primary);
  @media (max-width: ($lg)) {
    padding: 30px 15px 30px 40px;
    position: fixed;
    z-index: 10;
    top: 60px;
    right: -100%;
    width: 320px;
    height: 100%;
    transition: right 0.3s ease-in-out;
    &.is-open {
      right: 0;
    }
  }
  &__content {
    position: sticky;
    top: 80px;
  }
}
</style>
