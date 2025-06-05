<template>
    <div class="section-wrapper d-flex flex-wrap ga-4">
        <MetricBox v-for="metric in metrics" :key="metric.name" :metric="metric" />
    </div>
</template>

<script setup lang="ts">
  import MetricBox from '@/components/MetricBox/MetricBox.vue';

  const metrics = [
    {
      name: 'New Users',
      value: 100,
      icon: 'mdi-account',
    },
    {
      name: 'Sales',
      value: 200,
      icon: 'mdi-cart',
    },
    {
      name: 'Revenue',
      value: 300,
      icon: 'mdi-cash',
    },
    {
      name: 'Pending Orders',
      value: 400,
      icon: 'mdi-clock',
    },
  ];
</script>