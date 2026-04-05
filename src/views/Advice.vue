<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const advice = ref('Loading advice...');

async function fetchAdvice() {
  try {
    advice.value = 'Loading...';
    const response = await axios.get('https://api.adviceslip.com/advice');
    advice.value = response.data.slip.advice;
  } catch (error) {
    advice.value = 'Failed to load advice. Please check your connection and try again.';
    console.error(error);
  }
}

onMounted(() => {
  fetchAdvice();
});
</script>


<template>

    <div class="page">
        <h2>Daily Advice</h2>
        <div class="card">
            <p>{{ advice }}</p>
        
        <button @click="fetchAdvice">Get New Advice</button>
        </div>
    </div>
</template>

<style scoped>

.page {
  text-align: center;
    padding: 40px;
}

.card {
    background-color: #242424;
    padding: 30px;
    border-radius: 8px;
    max-width: 400px;
    margin: 0 auto;
    color: white;
    border: 1px solid #42b883;
}


p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-style: italic;
}

button {
    background-color: #42b883;
    color: #1a1a1a;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #35a46d;
}
</style>