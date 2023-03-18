<script setup>
import { reactive, ref, watch } from 'vue';

import Modal from '../layout/modal.vue';
import Btn from '../layout/btn.vue';
import BtnIcon from '../layout/btn-icon.vue';

import LangSwitch from './lang-switch.vue';

import ColorSwitch from './color-switch.vue';

import GearIcon from '../assets/gear.vue';

import { useAppStore } from '../stores/app';
import { useTranslate } from '../composables/useTranslate';

const openModal = ref(false);
const appStore = useAppStore();
const { doTranslate } = useTranslate();
const newSettings = reactive({
    lang: appStore.currentLang,
    darkModeChecked: appStore.currentColorMode === 'dark'
});
const modalToggled = () => {
    openModal.value = !openModal.value;
}
const langPicked = (lang) => {
    newSettings.lang = lang;
}
const modePicked = (checked) => {
    newSettings.darkModeChecked = checked;
}
const saveChanges = () => {
    appStore.updateAppSettings({...newSettings});
    modalToggled();
}

watch([
    () => appStore.currentLang,
    () => appStore.currentColorMode
], ([lang, currentColorMode]) => {
    newSettings.lang = lang;
    newSettings.darkModeChecked = currentColorMode === 'light' ? false : true;
});
</script>
<template>
    <BtnIcon :icon="GearIcon" @click="modalToggled" />
    <Modal :toggler="openModal" :togglerClickHandler="modalToggled">
        <template #header>
            {{ doTranslate( "modal.settings.label" ) }}
        </template>
        <template #content>
            <div 
            id="settings" 
            class="text-3xl capitalize font-mont font-regular
            flex flex-col">
                <div class="ctrl-row">
                    <div class="font-bold">
                        {{ doTranslate( "modal.settings.dark_mode" ) }}
                    </div>
                    <ColorSwitch @modePicked="modePicked" :currentColorMode="appStore.currentColorMode" />
                </div>
                <div class="ctrl-row">
                    <div class="font-bold">
                        {{ doTranslate( "modal.settings.language" ) }}
                    </div>
                    <LangSwitch @langPicked="langPicked" :currentLang="appStore.currentLang" :langs="appStore.langs" />
                </div>
                <div class="save-row mt-12 flex justify-end">
                    <Btn text="modal.btns.ok" @click="saveChanges" />
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