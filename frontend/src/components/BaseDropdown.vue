<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  modelValue: string;
  items: string[];
}>();

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void;
}>();

const currentValue = ref(props.modelValue);

const isOpen = ref(false);

const onClick = (newValue: string) => {
  currentValue.value = newValue;
  isOpen.value = false;

  emit('update:model-value', newValue);
};
</script>

<template>
  <div :class="['dropdown', { 'dropdown--open': isOpen }]">
    <div
      class="dropdown__selected"
      @click="isOpen = !isOpen"
    >
      {{ currentValue }}
      <img
        class="dropdown__arrow"
        src="../assets/svg/down-line.svg"
        alt="dropdown arrow"
      />
    </div>
    <ul v-if="isOpen" class="dropdown__items">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'dropdown__item',
          { 'dropdown__item--active': item === currentValue },
        ]"
        @click="onClick(item)"
      >
        <img v-if="item === currentValue" class="dropdown__item-checkmark" src="../assets/svg/check.svg" alt="check" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
.dropdown {
  font-size: 16px;
}

.dropdown__selected {
  position: relative;
  width: 250px;
  cursor: pointer;
  padding: 8px 24px;
  box-sizing: border-box;
  background: #f8f8f9;
  border: 1px solid #d6d9dd;
  border-radius: 4px;
}

.dropdown__arrow {
  position: absolute;
  top: 9px;
  right: 25px;
  width: 16px;
  height: 16px;
  transition: all 0.3s;
}

.dropdown--open .dropdown__arrow {
  transform: rotate(180deg);
}

.dropdown__items {
  width: 270px;
  list-style-type: none;
  margin-top: 10px;
  padding: 0;
  border: 1px solid #d6d9dd;
  border-radius: 4px;
}

.dropdown__item {
  position: relative;
  cursor: pointer;
  padding: 8px 24px;
}

.dropdown__item:hover {
  background: #e4e6e8;
}

.dropdown__item--active {
  background: #d9dcdf;
}

.dropdown__item-checkmark {
  position: absolute;
  top: 9px;
  left: 8px;
  width: 14px;
  height: 14px;
}
</style>
