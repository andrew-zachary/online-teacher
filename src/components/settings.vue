<script setup>
import { reactive } from 'vue';

import Modal from '../layout/modal.vue';
import Btn from '../layout/btn.vue';
import BtnIcon from '../layout/btn-icon.vue';

import LangSwitch from './lang-switch.vue';
import ColorSwitch from './color-switch.vue';
import Translate from './translate.vue';

import GearIcon from '../assets/gear.vue';

import { useAppStore } from '../stores/app';

const appStore = useAppStore();

const newSettings = reactive({
    langIndex: appStore.currentLang.index,
    darkModeChecked: false
});

const langPicked = (pickedIndex) => {
    newSettings.langIndex = pickedIndex;
}

const modePicked = (checked) => {
    newSettings.darkModeChecked = checked;
}
</script>
<template>
    <BtnIcon :icon="GearIcon" :clickHandler="appStore.toggleAppModalHandler" />
    <Modal>
        <template #header>
            <Translate toTranslate="modal.settings.label" />
        </template>
        <template #content>
            <div 
                id="settings" 
                class="text-3xl capitalize font-mont font-regular
                flex flex-col">
                <div class="ctrl-row">
                    <div class="font-bold">
                        <Translate toTranslate="modal.settings.language" />
                    </div>
                    <LangSwitch @langPicked="langPicked" :currentLang="appStore.currentLang" :langs="appStore.langs" />
                </div>
                <div class="ctrl-row">
                    <div class="font-bold">
                        <Translate toTranslate="modal.settings.dark_mode" />
                    </div>
                    <ColorSwitch @modePicked="modePicked" :currentColorMode="appStore.currentColorMode" />
                </div>
                <div class="save-row mt-12 flex justify-end">
                    <Btn text="modal.btns.save" :clickHandler="() => appStore.updateAppSettings({...newSettings})" />
                </div>
            </div>
        </template>
    </Modal>
</template>
<style lang="scss">
    #settings {

        .ctrl-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 1rem auto 0 auto;
            width: 100%;
            max-width: 25rem;

            &:first-child {
                margin: 0 auto;
            }
        }

        .save-row {
            @include withRtl('padding', 0 1rem 0 0, 0 0 0 1rem);
        }
    }
</style>