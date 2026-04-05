<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');  
const password = ref('');

const errorts = ref({
  name: '',
  email: '',
  password: ''
});

const isSubmitted = ref(false);


function handleSubmit() {
  // Reset error messages
  errorts.value = {
    name: '',
    email: '',
    password: '' }
    let isValid = true
    if (name.value.trim() === '') {
      errorts.value.name = 'Name is required.';
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        errorts.value.email = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        errorts.value.email = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password.value.trim() === '') {
        errorts.value.password = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 6) {
        errorts.value.password = 'Password must be at least 6 characters long.';
        isValid = false;
    }

  // Check if there are no errors
  if (isValid) {
    isSubmitted.value = true;
    // Here you can also handle form submission, e.g., send data to a server
  }
}


  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    errorts.value.email = 'Email is required.';
  } else if (!emailPattern.test(email.value)) {
    errorts.value.email = 'Please enter a valid email address.';
  }

  // Validate password
  if (!password.value) {
    errorts.value.password = 'Password is required.';
  } else if (password.value.length < 6) {
    errorts.value.password = 'Password must be at least 6 characters long.';
  }

  // Check if there are no errors
if (isValid) {
    isSubmitted.value = true
    // In a real app, you would use Axios here to send this data to a database
    console.log('Sending to server:', { 
      name: name.value, 
      email: email.value, 
      password: password.value 
    })
    
    // Clear the form fields
    name.value = ''
    email.value = ''
    password.value = ''
  }

</script>

<template>
<div class="form-container">
    <h2>Create an Account</h2>
    <form @submit.prevent="handleSubmit" v-if="!isSubmitted">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" />
            <span class="error" v-if="errorts.name">{{ errorts.name }}</span>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" />
            <span class="error" v-if="errorts.email">{{ errorts.email }}</span>
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" />
            <span class="error" v-if="errorts.password">{{ errorts.password }}</span>
        </div>

        <button type="submit">Register</button>
    </form>

    <div v-else class="success-message">
        <h2>Registration Successful!</h2>
        <p>Welcome, {{ name }}!</p>
        <button @click="isSubmitted = false">Register Another Account</button>
    </div>
</div>

</template>

<style scoped>

.form-container {
    max-width: 400px;
    width: 400px;
    margin: 0px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #242424;
    box-sizing: border-box;
}
.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
}
label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #fff;
}
input {
    padding: 10px;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 1rem;
}
.error-border {
    border-color: #ff4c4c;
}
.error-text{
    color: #ff4c4c;
    font-size: 0.85rem;
    margin-top: 5px;
}
button{
    background-color: #42b883;
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    font-size: 1.1rem;
}

.success-message {
    text-align: center;
    color: #42b883;
}

</style>