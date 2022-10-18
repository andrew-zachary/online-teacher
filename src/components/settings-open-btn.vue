<script setup>
import gear from '../assets/gear.svg';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
</script>
<template>
    <img class="cursor-pointer" :src="gear" alt="gear" @click="appStore.toggleAppModalHandler" />
</template>
<style></style>