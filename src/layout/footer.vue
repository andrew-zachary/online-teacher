<script setup>

import Settings from '../components/settings.vue';

</script>
<template>
    <footer class="absolute bottom-0">
        <Settings />
    </footer>
</template>
<style lang="scss">
footer {
    @include withRtl('left', 100%, unset);
    @include withRtl('right', unset, 100%);
    @include withRtl('transform', translate(-120%, 0%), translate(120%, 0%));

    img {
        width: 4rem;
    }
}
</style>