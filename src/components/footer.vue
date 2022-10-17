<script setup>
import gear from '../assets/gear.svg';

import AppModal from '../layout/app-modal.vue';

import { useAppStore } from '../stores/app';
const appStore = useAppStore();
</script>
<template>
    <footer class="w-full flex justify-end absolute bottom-0">
        <img class="cursor-pointer" :src="gear" alt="gear" @click="appStore.toggleModalHandler">
        <AppModal>
            <template #header>
                title 1
            </template>
            <template #content>
                <p class="text-2xl font-mont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, iusto!
                </p>
            </template>
        </AppModal>
    </footer>
</template>
<style>

</style>