<script setup>
import Translate from '../components/translate.vue';

const {text} = defineProps(['text']);
</script>
<template>
    <button 
    class="p-4 
    rounded-xl 
    text-3xl text-secondary font-popp font-regular capitalize
    bg-quaternary dark:bg-quaternary-dark">
        <Translate :toTranslate="text" />
    </button>
</template>
<style></style>