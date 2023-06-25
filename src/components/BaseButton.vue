<template>
  <button
    :class="types[buttonType]"
    class="button"
    type="button">
    <slot></slot>
  </button>
</template>

<script setup>
import {
  BUTTON_TYPE_DEFAULT,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_FAVORITE,
} from "@/constants";

defineProps({
  buttonType: {
    type: String,
    required: false,
    default: BUTTON_TYPE_DEFAULT,
  },
});

const types = {
  [BUTTON_TYPE_DEFAULT]: "button_default",
  [BUTTON_TYPE_PRIMARY]: "button_primary",
  [BUTTON_TYPE_DANGER]: "button_danger",
  [BUTTON_TYPE_SUCCESS]: "button_success",
  [BUTTON_TYPE_FAVORITE]: "button_favorite",
};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  padding: 7px;

  &:disabled {
    opacity: 0.5;
  }
  svg {
    display: block;
    width: 25px;
    height: 25px;
  }

  &_default {
    background-color: var(--color-primary-lighter);
  }
  &_primary {
    background-color: var(--color-secondary);
  }
  &_danger {
    background-color: var(--color-danger);
    color: var(--color-text);
  }
  &_success {
    background-color: var(--color-success);
    color: var(--color-text);
  }
  &_favorite {
    position: relative;
    z-index: 2;
    background-color: var(--color-primary-opacity);
    @media (any-hover: hover) {
      &:hover {
        svg {
          fill: var(--color-secondary);
        }
      }
    }
    &.is-favorite {
      svg {
        fill: var(--color-secondary);
      }
    }
    svg {
      stroke: var(--color-secondary);
      fill: transparent;
      transition: all 0.3s ease;
    }
  }
}
</style>
