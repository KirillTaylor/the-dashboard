<template>
    <v-card class="pa-4 d-flex align-center justify-center" style="width: 200px;">
        <v-icon size="40">{{ metric.icon }}</v-icon>
        <div>
            <v-card-title class="py-0">
                <div class="text-h6">{{ metric.value }}</div>
            </v-card-title>
            <v-card-subtitle>
                <p>{{ metric.name }}</p>
            </v-card-subtitle>
        </div>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    metric: {
        name: string;
        value: number;
        icon: string;
    };
}>();
</script>