<script setup>
const {clickHandler, icon} = defineProps(['clickHandler', 'icon']);
</script>
<template>
    <button class="p-4 rounded-full text-3xl capitalize text-secondary font-pop font-bold" @click="clickHandler">
        <img :src="icon" alt="">
    </button>
</template>
<style scoped lang="scss">
    img {
        width: 3rem;
    }
</style>