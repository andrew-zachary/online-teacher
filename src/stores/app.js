import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const toggleModal = ref(false);
  function toggleModalHandler() {
    toggleModal.value = !toggleModal.value;
  }

  return { toggleModal, toggleModalHandler }
})
