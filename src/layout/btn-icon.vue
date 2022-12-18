<script setup>
const {icon} = defineProps(['icon']);
</script>
<template>
    <button class="p-4 rounded-full text-3xl capitalize text-secondary font-popp font-bold">
        <Component :is="icon" />
    </button>
</template>
<style scoped lang="scss">
    button {
        @include withRtl('transform', scale(1, 1), scale(-1, 1));
        
        svg {
            width: 4rem;
            fill: var(--ternary);
        }
    }
</style>