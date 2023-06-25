<template>
  <button :class="{'_active': statesStore.burgerState}" class="burger">
    <span></span>
  </button>
</template>
<script setup>
import { useStatesStore } from "@/stores/states";
const statesStore = useStatesStore();
</script>

<style lang="scss">
.burger {
  @media (min-width: ($lg)) {
    display: none;
  }
  cursor: pointer;
  position: relative;
  z-index: 5;
  display: flex;
  flex: 0 0 30px;
  height: 18px;
  span,
  &::before,
  &::after {
    pointer-events: none;
    content: "";
    transition: all 0.3s ease 0s;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-secondary);
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    top: calc(50% - 1px);
    opacity: 1;
  }
  &._active {
    span {
      opacity: 0;
    }
    &::before,
    &::after {
    }
    &::before {
      top: calc(50% - 1px);
      transform: rotate(-45deg);
    }
    &::after {
      bottom: calc(50% - 1px);
      transform: rotate(45deg);
    }
  }
}
</style>
