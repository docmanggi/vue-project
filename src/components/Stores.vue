<script setup>
import { useLocalStorage } from '../composables/useLocalStorage';

const theme = useLocalStorage('site-theme', 'dark');
const username = useLocalStorage('user-profile-name', 'Guest');

</script>

<template>
    <div>
        <h2>Settings</h2>
        <p>Current Theme: {{ theme }}</p>
        <button @click="theme = 'light'">Switch to Light Mode</button>
    </div>
</template>