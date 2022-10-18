<script setup>
import Translate from '../components/translate.vue';

const {clickHandler, text} = defineProps(['clickHandler', 'text']);
</script>
<template>
    <button class="p-4 rounded-xl text-3xl capitalize text-secondary font-popp font-bold bg-primary" @click="clickHandler">
        <Translate :toTranslate="text" />
    </button>
</template>
<style></style>