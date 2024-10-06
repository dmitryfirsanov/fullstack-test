<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseButton from './components/BaseButton.vue';
import BaseDropdown from './components/BaseDropdown.vue';

import { useMainStore } from './store/main';
import BaseTable from './components/BaseTable.vue';

const loading = ref(false);

const dropdownItems = ['Не выбрано', 'Cделка', 'Контакт', 'Компания'];

const selectedValue = ref(dropdownItems[0]);

const mainStore = useMainStore();

const tableItems = computed<string[]>(() => {
  switch (selectedValue.value) {
    case 'Cделка':
      return mainStore.leads;
    case 'Контакт':
      return mainStore.contacts;
    case 'Компания':
      return mainStore.companies;
    default:
      return [];
  }
});

const onCLick = async () => {
  loading.value = true;

  if (mainStore.accessToken === '') {
    await mainStore.auth();
  }

  switch (selectedValue.value) {
    case 'Cделка':
      await mainStore.createLead();
      break;
    case 'Контакт':
      await mainStore.createContact();
      break;
    case 'Компания':
      await mainStore.createCompany();
      break;
    default:
      break;
  }

  loading.value = false;
};
</script>

<template>
  <main>
    <BaseTable :items="tableItems">
      <BaseDropdown
        v-model="selectedValue"
        :items="dropdownItems"
      />

      <BaseButton
        :loading="loading"
        :disabled="selectedValue === 'Не выбрано'"
        @click="onCLick"
      >
        Создать
      </BaseButton>
    </BaseTable>
  </main>
</template>

<style>
main {
  width: 1200px;
  margin: 100px auto 0;
}
</style>
