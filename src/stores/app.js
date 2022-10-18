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
  const toggleAppModal = ref(false);

  function toggleAppModalHandler() {
    toggleAppModal.value = !toggleAppModal.value;
  }

  function updateAppSettings(newSettings) {
    // update current language
    currentLang.value = langs[newSettings.langIndex];
    
    // adjust ui
    if(currentLang.value.dir === 'rtl') {
      document.querySelector('html').classList.add('is-rtl');
    } else {
      document.querySelector('html').classList.remove('is-rtl');
    }

    // change global locale
    locale.value = currentLang.value.locale;

    // close modal
    toggleAppModal.value = !toggleAppModal.value;
  }

  return { langs, currentLang, toggleAppModal, toggleAppModalHandler, updateAppSettings }
})
