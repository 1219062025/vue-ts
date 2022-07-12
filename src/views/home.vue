<template>
  <div>
    <h1>vue-ts</h1>
  </div>
</template>

<script setup lang="ts">
  import service from '@/utils/http/axios';

  type Account = {
    id: number;
    account: string;
    email: string;
    nickname: string;
    role: string;
    createTime: string;
    remark: string;
    status: '0' | '1';
  };

  if (0 === -0) {
    console.log(212);
  }

  service.get<Account[]>('/getAccountList').then((res) => {
    console.log(res.data);
  });
</script>

<style scoped lang="scss"></style>
