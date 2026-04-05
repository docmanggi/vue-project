<template>
  <div class="app-container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/advice">Advice API</router-link>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #444;
}

a {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}

a.router-link-active {
  color: white;
  text-decoration: underline;
}
</style>