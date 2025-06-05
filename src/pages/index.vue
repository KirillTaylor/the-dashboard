<template>
  <MainLayout>
    <MetricsHeader />
    <RevenueGraph />
  </MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layout/MainLayout.vue';
  import MetricsHeader from '@/sections/MetricsHeader/MetricsHeader.vue';
  import RevenueGraph from '@/sections/RevenueGraph/RevenueGraph.vue';
</script>
