<template>
  <div class="switcher">
    <input
      v-model="themeState"
      @change="themeToggle"
      type="checkbox"
      class="switcher__input visually-hidden"
      id="theme-switcher" />
    <label
      for="theme-switcher"
      class="switcher__label">
      <div class="switcher__thumb"></div>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const themeState = ref(false);

function themeToggle() {
  themeState.value
    ? document.documentElement.classList.add("light-theme")
    : document.documentElement.classList.remove("light-theme");
}
themeToggle();
</script>

<style lang="scss">
.switcher {
  &__input {
    &:checked + .switcher__label {
      .switcher__thumb {
        left: calc(100% - 14px);
        transform: translateY(-50%) translateX(-50%);
      }
    }
  }
  &__label {
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 25px;
    background: var(--color-primary-lighter);
    display: block;
    border-radius: 100px;
  }
  &__thumb {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
