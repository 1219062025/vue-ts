<template>
  <div>
    <h1>vue-ts</h1>
    <h2>{{ store.getCall }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { getAccountInfoApi } from '@/api/demo/account';
  import { useMainStore } from '@/store/main';

  const store = useMainStore();

  onMounted(async () => {
    const { data } = await getAccountInfoApi();
    console.log(data);
  });
</script>

<style scoped lang="scss"></style>
