<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from '../stores/todoStore.js'

const taskStore = useTaskStore()
const newTaskInput = ref('')

// This asks the database for your tasks the moment the page loads
onMounted(() => {
  taskStore.fetchTasks()
})

function handleAdd() {
  if (newTaskInput.value.trim() !== '') {
    taskStore.addTask(newTaskInput.value)
    newTaskInput.value = '' 
  }
}
</script>

<template>
  <div class="todo-container">
    <h2>Task Manager (Live Database)</h2>
    
    <div class="input-group">
      <input 
        v-model="newTaskInput" 
        @keyup.enter="handleAdd"
        placeholder="Add a new task..." 
      />
      <button @click="handleAdd">Add Task</button>
    </div>

    <ul v-if="taskStore.tasks.length > 0">
      <li v-for="task in taskStore.tasks" :key="task.id" :class="{ 'is-complete': task.completed }">
        
        <div class="task-info">
          <input 
            type="checkbox" 
            :checked="task.completed" 
            @change="taskStore.toggleTaskStatus(task)" 
          />
          <span>{{ task.title }}</span>
        </div>

        <button class="delete-btn" @click="taskStore.removeTask(task.id)">X</button>
      </li>
    </ul>
    
    <p v-else class="empty-state">No tasks yet. Add one above.</p>
  </div>
</template>

<style scoped>
.todo-container {
  background-color: #242424;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  color: white;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #666;
  font-size: 1rem;
}

button {
  background-color: #42b883;
  color: #1a1a1a;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.delete-btn {
  background-color: #ff4c4c;
  color: white;
  padding: 4px 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.task-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.is-complete span {
  text-decoration: line-through;
  color: #888;
}

.empty-state {
  text-align: center;
  color: #888;
  margin-top: 20px;
}
</style>