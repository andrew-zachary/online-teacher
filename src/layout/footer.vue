<script setup>
import gear from '../assets/gear.svg';

import AppModal from './app-modal.vue';
import Settings from '../components/settings.vue';

import { useAppStore } from '../stores/app';
const appStore = useAppStore();
</script>
<template>
    <footer class="w-full flex justify-end absolute bottom-0">
        <img class="cursor-pointer" :src="gear" alt="gear" @click="appStore.toggleAppModalHandler">
        <AppModal>
            <template #header>
                settings
            </template>
            <template #content>
                <Settings :appStore="appStore" />
            </template>
        </AppModal>
    </footer>
</template>
<style></style>