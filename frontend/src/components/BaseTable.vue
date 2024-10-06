<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <div class="table">
    <div class="table__header">
      <slot></slot>
    </div>
    <div class="table__body">
      <ul class="table__list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="table__list-item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.table {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #d6d9dd;
  border-radius: 4px;
}

.table__header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d6d9dd;
}

.table__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.table__list-item {
  padding: 10px 0;
  border-bottom: 1px solid #d6d9dd;
}

.table__list-item:last-child {
  border-bottom: none;
}
</style>
