import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useAppStore = defineStore('app', () => {
  const defaultLangIndex = 0;
  const { locale } = useI18n({ useScope: 'global' });

  const langs = [
      {index:0, locale:'en', name: 'english', dir:'ltr'},
      {index:1, locale:'ar', name: 'العربية', dir:'rtl'}
  ];

  const currentLang = ref(langs[defaultLangIndex]);
  const currentColorMode = ref('light');
  const toggleAppModal = ref(false);
  const togglePageLoader = ref(false);

  function toggleAppModalHandler() {
    toggleAppModal.value = !toggleAppModal.value;
  }

  function togglePageLoaderHandler() {
    togglePageLoader.value = !togglePageLoader.value;
  }

  function updateAppSettings(newSettings) {
    // update current language, color mode
    currentLang.value = langs[newSettings.langIndex];
    currentColorMode.value = newSettings.darkModeChecked?'dark':'light';
    
    // adjust ui
    if(currentLang.value.dir === 'rtl') {
      document.querySelector('html').classList.add('is-rtl');
    } else {
      document.querySelector('html').classList.remove('is-rtl');
    }
    if(currentColorMode.value === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }

    // change global locale
    locale.value = currentLang.value.locale;

    // close modal
    toggleAppModal.value = !toggleAppModal.value;
  }

  return {
    langs, 
    currentLang, 
    currentColorMode, 
    toggleAppModal,
    togglePageLoader,
    toggleAppModalHandler, 
    updateAppSettings, 
    togglePageLoaderHandler
  };
});
