import { reactive, ref } from 'vue';
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
  const togglePageLoader = ref(false);
  const toggleNotificationModal = reactive({
    open:false,
    header:"",
    msg:""
  });
  const toggleConfirmationModal = reactive({
    open:false,
    header:"",
    msg:"",
    to_confirm: null
  });

  function toggleNotificationModalHandler(modalData) {
    toggleNotificationModal.open = modalData.open;
    toggleNotificationModal.header = modalData.header;
    toggleNotificationModal.msg = modalData.msg;
  }

  function toggleConfirmationModalHandler(modalData) {
    toggleConfirmationModal.open = modalData.open;
    toggleConfirmationModal.header = modalData.header;
    toggleConfirmationModal.msg = modalData.msg;
    toggleConfirmationModal.to_confirm = modalData.to_confirm;
  }

  function togglePageLoaderHandler() {
    togglePageLoader.value = !togglePageLoader.value;
  }

  function updateAppSettings(newSettings) {
    // update current language, color mode

    if(newSettings.lang !== null) {

      currentLang.value = newSettings.lang;

      if(currentLang.value.dir === 'rtl') {
        document.querySelector('html').classList.add('is-rtl');
      } else {
        document.querySelector('html').classList.remove('is-rtl');
      }

      locale.value = currentLang.value.locale;
    }

    if(newSettings.darkModeChecked !== null) {

      currentColorMode.value = newSettings.darkModeChecked?'dark':'light';

      if(currentColorMode.value === 'dark') {
        document.querySelector('html').classList.add('dark');
      } else {
        document.querySelector('html').classList.remove('dark');
      }
    }

  }

  return {
    langs, 
    currentLang, 
    currentColorMode,
    togglePageLoader,
    toggleNotificationModal,
    toggleConfirmationModal,
    updateAppSettings, 
    togglePageLoaderHandler,
    toggleNotificationModalHandler,
    toggleConfirmationModalHandler
  };
});
