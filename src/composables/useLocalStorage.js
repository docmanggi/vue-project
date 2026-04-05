import { ref, watch } from "vue";
export function useLocalStorage(key, defaultValue) {
  const savedData = localStorage.getItem(key);
  const data = ref(savedData ? JSON.parse(savedData) : defaultValue);

  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  }, { deep: true });

  return data;
  }