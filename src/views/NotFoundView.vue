<template>
  <div class="content">
    <div class="not-fount _imw">
      <h1 class="not-fount__title main-title">Ой-ой! Здається Ви заблукали!</h1>
      <img
        src="/images/svg/not-found.svg"
        alt="page not found"
        class="not-fount__image" />
      <RouterLink
        to="/"
        class="not-fount__link"
        >Повернутися</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss">
.not-fount {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
  }
  &__image {
    max-width: 600px;
    margin-bottom: 30px;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 20px;
    background-color: var(--color-secondary);
    color: var(--color-dark);
    border-radius: 8px;
  }
}
</style>
