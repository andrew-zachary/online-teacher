<script setup>
const {clickHandler, icon} = defineProps(['clickHandler', 'icon']);
</script>
<template>
    <button class="p-4 rounded-full text-3xl capitalize text-secondary font-popp font-bold" @click="clickHandler">
        <Component :is="icon" />
    </button>
</template>
<style scoped lang="scss">
    svg {
        width: 4rem;
        fill: var(--ternary);
    }
</style>