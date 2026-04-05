<script setup>
import TodoList from '../components/TodoList.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
</script>

<template>
  <div class="page">
    <h2>Home Page</h2>
    <p>Welcome to my awesome new Vue application.</p>
    <TodoList />
    <RegistrationForm />
  </div>
</template>

<style scoped>
.page {
  text-align: center;
  padding: 40px;
}
</style>