import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const defaultLangIndex = 0;

  const langs = [
      {index:0, short:'en', name: 'english', dir:'ltr'},
      {index:1, short:'ar', name: 'العربية', dir:'rtl'}
  ];

  const currentLang = ref(langs[defaultLangIndex]);
  const toggleAppModal = ref(false);

  function toggleAppModalHandler() {
    toggleAppModal.value = !toggleAppModal.value;
  }

  function updateAppSettings(newSettings) {
    // update current language
    currentLang.value = langs[newSettings.langIndex];
    
    // adjust ui and call other libs
    if(currentLang.value.dir === 'rtl') {
      document.querySelector('html').classList.add('is-rtl');
    } else {
      document.querySelector('html').classList.remove('is-rtl');
    }

    // close modal
    toggleAppModal.value = !toggleAppModal.value;
  }

  return { langs, currentLang, toggleAppModal, toggleAppModalHandler, updateAppSettings }
})
