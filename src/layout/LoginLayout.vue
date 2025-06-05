<template>
  <div class="login-layout d-flex align-center justify-center flex-column">
    <div class="logo-container mb-6 d-flex align-center justify-center">
        <img src="@/assets/logo.png" alt="The Dashboard" class="logo w-50" />
    </div>
    <v-card class="login-container w-100 mx-auto pa-8" style="max-width: 400px;">
      <slot></slot>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Login layout logic can be added here
</script>

<style scoped>
.login-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}
</style>
