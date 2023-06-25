<template>
  <RouterLink
    to="/"
    class="logo">
    <img
      class="logo__image"
      src="/images/svg/logo-header.svg"
      alt="Conquer CINEMA logo" />
    <span class="logo__name">Pop<span class="logo__name-slog">CONQUER</span> CINEMA</span>
  </RouterLink>
</template>

<script setup></script>

<style lang="scss">
.logo {
  display: flex;
  align-items: flex-end;
  &__image {
    width: 40px;
    height: 40px;
    @media (max-width: ($sm)) {
      width: 35px;
      height: 35px;
    }
  }
  &__name {
    color: var(--color-secondary);
    font-family: "Cherry Bomb One", cursive;
    @include av("font-size", 22, 16);
    @media (max-width: ($sm)) {
      display: none;
    }
  }
  &__name-slog {
    font-size: 25px;
    @include av("font-size", 25, 18);
    color: steelblue;
  }
}
</style>
