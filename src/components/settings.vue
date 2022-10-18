<script setup>
import { reactive } from 'vue';
import LangSwitch from '../components/lang-switch.vue';
import Translate from '../components/translate.vue';
import Btn from '../layout/btn.vue';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const newSettings = reactive({
    langIndex: null
});

const langPicked = (pickedIndex) => {
    newSettings.langIndex = pickedIndex;
}
</script>
<template>
    <div id="settings" class="text-3xl capitalize font-mont font-regular">
        <div class="ctrl-row flex items-center justify-between">
            <div class="font-bold"><Translate toTranslate="modal.settings.language" /></div>
            <LangSwitch @langPicked="langPicked" :currentLang="appStore.currentLang" :langs="appStore.langs" />
        </div>
        <div class="save-row mt-12 flex justify-end">
            <Btn text="modal.btns.save" :clickHandler="() => appStore.updateAppSettings({...newSettings})" />
        </div>
    </div>
</template>
<style lang="scss">
    #settings {

        .ctrl-row {
            margin: 0 auto;
            max-width: 25rem;
        }

        .save-row {
            @include withRtl('padding', 0 1rem 0 0, 0 0 0 1rem);
        }
    }
</style>