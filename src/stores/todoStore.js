import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage'

export const useTaskStore = defineStore('task', () => {
  // Check if we have saved data in the browser
  const savedData = localStorage.getItem('capstone-tasks')
  
  // Set the default backup data
  const defaultTasks = [
    { id: 1, title: 'Finish Vue OJT', completed: false },
    { id: 2, title: 'Deploy to Netlify', completed: false }
  ]

  // If saved data exists, load it. Otherwise, use the defaults.
  const tasks = ref(savedData ? JSON.parse(savedData) : defaultTasks)

  // Watch the tasks array for any changes and save them instantly
  watch(tasks, (newTasks) => {
    localStorage.setItem('capstone-tasks', JSON.stringify(newTasks))
  }, { deep: true }) // Deep true ensures it catches changes inside the objects

  function addTask(title) {
    if (title.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: title,
        completed: false
      }
      tasks.value.push(newTask)
    }
  }

  function removeTask(taskId) {
    tasks.value = tasks.value.filter(task => task.id !== taskId)
  }

  function toggleTaskStatus(taskId) {
    const task = tasks.value.find(task => task.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }

  return { tasks, addTask, removeTask, toggleTaskStatus }
})