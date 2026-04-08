import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useTaskStore = defineStore('task', () =>{
  const tasks = ref([])

  const apiUrl = 'https://69d6684d1c120e733cce2aff.mockapi.io/tasks'
  
  async function fetchTasks() {
    try {
      const response = await axios.get(apiUrl)
      tasks.value = response.data
    } catch (error) {
      console.error('Failed to load tasks', error)
    }
  }
  async function addTask(title) {
  if (title.trim() === '') return

  try {
    const response = await axios.post(apiUrl, { title: title, completed: false })
    tasks.value.push(response.data)
} 
catch (error) {
  console.error('Failed to add task', error)
}
}
async function removeTask(taskId) {
  try {
    await axios.delete(`${apiUrl}/${taskId}`)
    tasks.value = tasks.value.filter(task => task.id !== taskId)
  } catch (error) {
    console.error('Failed to remove task', error)
  }
}

async function toggleTaskStatus(task) {
try {
  const response = await axios.put(`${apiUrl}/${task.id}`, { ...task, completed: !task.completed })
  const index = tasks.value.findIndex(t => t.id === task.id)
  if (index !== -1) {
    tasks.value[index] = response.data
  }
} catch (error) {
  console.error('Failed to toggle task status', error)
}
}
  return { tasks, fetchTasks, addTask, removeTask, toggleTaskStatus }
})