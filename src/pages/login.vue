<template>
    <LoginLayout>
        <v-card-title>
            <h1 class="text-center">Welcome!</h1>
        </v-card-title>
        <v-card-subtitle>
            <p class="text-center">Log into your account</p>
        </v-card-subtitle>
        <v-card-text>
            <v-form @submit.prevent="handleLogin">
                <v-text-field label="Email" v-model="email" type="email" required />
                <v-text-field label="Password" v-model="password" type="password" required />
                <v-alert v-if="error" type="error" class="mt-3">
                    {{ error }}
                </v-alert>
            </v-form>
        </v-card-text>
        <v-card-text>
            <a href="#">Forgot password?</a>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" block @click="handleLogin" :loading="loading">
                Login
            </v-btn>
        </v-card-actions>
    </LoginLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setAuthenticated } from '@/utils/auth';
import AuthApi from '@/api/auth';
import { isEmailValid } from '@/utils/helpers';
import LoginLayout from '@/layout/LoginLayout.vue';


const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleLogin = async () => {
    if (!email.value || !password.value) {
        error.value = 'Please fill in all fields';
        return;
    }
    if (!isEmailValid(email.value)) {
        error.value = 'Invalid email address';
        return;
    }

    loading.value = true;
    error.value = '';

    try {
        const response = await AuthApi.login(email.value, password.value);

        // Set authentication state
        setAuthenticated(true);

        // Redirect to home page
        router.push('/');
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'An error occurred';
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped></style>