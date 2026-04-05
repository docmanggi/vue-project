<script setup>
import { ref, computed } from 'vue';

const number1 = ref(0);
const number2 = ref(0);
const operation = ref('add');

const result = computed(() => {
  switch (operation.value) {
    case 'add':
      return number1.value + number2.value;
    case 'subtract':
      return number1.value - number2.value;
    case 'multiply':
      return number1.value * number2.value;
    case 'divide':
      return number2.value === 0 ? 'Cannot divide by 0' :number1.value / number2.value;
    default:
      return 0;
  }
});
</script>

<template>
    <div class="calculator">
        <h2>Vue Calculator</h2>
        <div class="inputs">
            <input type="number" v-model.number="number1" placeholder="Number 1" />
            <select v-model="operation">
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" v-model.number="number2" placeholder="Number 2" />

        </div>
        <div class="result">
            <h3>Result: {{ result }}</h3>
        </div>
    </div>
</template>

<style scoped>
.calculator {
    background-color: #242424;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    color: #fff;
    width: 300px;
    box-sizing: border-box;
}

.inputs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
}

input, select {
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    text-align: center;
    width : 100%
}

.result h3 {
    color: #42b888;
    margin: 0;
    font-size: 1.5rem;
}
</style>