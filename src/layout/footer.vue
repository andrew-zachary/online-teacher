<script setup>
import AppModal from './app-modal.vue';
import Settings from '../components/settings.vue';
import SettingsOpenBtn from '../components/settings-open-btn.vue';
import Translate from '../components/translate.vue';
</script>
<template>
    <footer class="w-full flex justify-end absolute bottom-0">
        <SettingsOpenBtn />
        <AppModal>
            <template #header>
                <Translate toTranslate="modal.settings.label" />
            </template>
            <template #content>
                <Settings />
            </template>
        </AppModal>
    </footer>
</template>
<style></style>