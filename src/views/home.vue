<template>
  <div>
    <h1>vue-ts</h1>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { getAccountInfoApi } from '@/api/demo/account';

  onMounted(async () => {
    const { data } = await getAccountInfoApi();
    console.log(data);
  });
</script>

<style scoped lang="scss"></style>
