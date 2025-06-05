<template>
    <v-navigation-drawer>
        <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to">
                <template #prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                </template>
                <span>{{ item.title }}</span>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const menuItems = [
    {
        title: 'Home',
        icon: 'mdi-home',
        to: '/',
    },
    {
        title: 'Products',
        icon: 'mdi-package',
        to: '/products',
    },
    {
        title: 'Orders',
        icon: 'mdi-cart',
        to: '/orders',
    },
    {
        title: 'Customers',
        icon: 'mdi-account',
        to: '/customers',
    },
    
];
</script>