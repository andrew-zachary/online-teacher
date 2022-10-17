<script setup>
const {clickHandler, text} = defineProps(['clickHandler', 'text']);
</script>
<template>
    <button class="p-4 rounded-xl text-3xl capitalize text-secondary font-pop font-bold bg-primary" @click="clickHandler">{{text}}</button>
</template>
<style></style>