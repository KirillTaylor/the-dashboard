<template>
    <v-layout>
        <Header />

        <v-main class="h-screen">
            <slot></slot>
        </v-main>

        <footer class="footer">
            <!-- Add your footer content here -->
        </footer>
    </v-layout>
</template>

<script setup lang="ts">
import Header from '@/sections/Header/Header.vue';
</script>

<style scoped></style>
