<script setup>
import { useTranslate } from '../composables/useTranslate';

const { clickHandler, text } = defineProps(['clickHandler', 'text']);
const { doTranslate } = useTranslate();
</script>
<template>
    <button
    class="px-8 py-4 
    text-3xl font-mont font-bold capitalize
    border-2 border-quaternary dark:border-quaternary-dark
    text-quaternary dark:text-quaternary-dark
    rounded-full"
    @click="clickHandler">
        {{ doTranslate( text ) }}
    </button>
</template>
<style></style>