<template>
  <div
    v-if="isModalOpen"
    class="modal">
    <div class="modal__content">
      <h2 class="modal__title">Підтвердіть дію</h2>
      <slot></slot>
      <div class="modal__footer">
        <BaseButton
          :button-type="BUTTON_TYPE_DANGER"
          @click="emit('close')"
          class="modal__close">
          Закрити
        </BaseButton>
        <BaseButton
          :button-type="BUTTON_TYPE_SUCCESS"
          @click="emit('confirm')"
          class="modal__confirm">
          Підтвердити
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS } from "@/constants";

defineProps({
  isModalOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits({
  close: null,
  confirm: null,
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    background-color: var(--color-primary-light);
    padding: 20px;
    border-radius: 8px;
  }
  &__footer {
    padding: 0 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__title {
    font-size: 25px;
    color: var(--color-secondary);
    text-align: center;
    font-weight: bold;
    margin-bottom: em(15, 25);
  }
  &__test {
  }
  &__close {
  }
  &__confirm {
  }
}
</style>
