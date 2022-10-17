<script setup>
const {clickHandler} = defineProps(['clickHandler']);
</script>
<template>
    <button class="p-4 rounded-xl text-3xl capitalize text-secondary font-pop font-bold bg-primary" @click="clickHandler">increment</button>
</template>
<style></style>