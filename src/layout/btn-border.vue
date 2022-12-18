<script setup>
import Translate from '../components/translate.vue';

const {clickHandler, text} = defineProps(['clickHandler', 'text']);
</script>
<template>
    <button
    class="px-8 py-4 
    text-3xl font-mont font-bold capitalize
    border-2 border-quaternary dark:border-quaternary-dark
    text-quaternary dark:text-quaternary-dark
    rounded-full"
    @click="clickHandler">
        <Translate :toTranslate="text" />
    </button>
</template>
<style></style>