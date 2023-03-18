<script setup>
import { useTranslate } from '../composables/useTranslate';

const { text } = defineProps(['text']);
const { doTranslate } = useTranslate();
</script>
<template>
    <button 
    class="p-4 
    rounded-xl 
    text-3xl text-secondary font-popp font-regular capitalize
    bg-quaternary dark:bg-quaternary-dark">
        {{ doTranslate( text ) }}
    </button>
</template>
<style></style>