<template>
    <v-card>
        <v-card-title>
            <h3>{{ props.title }}</h3>
        </v-card-title>
        <v-card-text>
            <v-chart :options="chartOptions" />
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>
