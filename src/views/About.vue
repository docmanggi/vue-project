<script setup>
import TodoList from '../components/TodoList.vue';
</script>
<template>
  <div class="page">
    <h2>About Page</h2>
    <p>This page proves that our Vue Router is working perfectly!</p>
    <TodoList />
  </div>
</template>

<style scoped>
.page {
  text-align: center;
  padding: 40px;
}
</style>
