<script setup lang="ts">
import Spinner from './Spinner.vue';

defineProps<{
  disabled?: boolean;
  loading?: boolean;
}>();
</script>

<template>
  <button
    :class="[
      'button',
      { 'button--loading': loading },
      { 'button--disabled': disabled },
    ]"
    :disabled="disabled"
  >
    <slot v-if="!loading"></slot>
    <Spinner
      class="button__spinner"
      v-else
    />
  </button>
</template>

<style>
.button {
  background: #4c8bf7;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  padding: 8px 12px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.button--loading {
  padding: 8px;
}

.button--disabled {
  cursor: not-allowed;
  background: #f2f3f4;
  border-color: #d6d9dd;
  color: #1a1a1a;
}
</style>
