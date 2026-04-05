<script setup>
defineProps({
  name: String,
  course: String
})
</script>
<template>
<div class="card">
    <h2>{{ name }}</h2>
    <p>Course: {{ course }}</p>
</div>
</template>

<style scoped>
.card {
    border: 1px solid #43b883;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    background-color: #242424;
    color: white;
}
</style>