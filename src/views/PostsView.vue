<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="posts">
        <RouterView v-slot="{Component}">
            <transition name="fade-in-out" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </RouterView>
    </div>
</template>

<style lang="scss">
.fade-in-out-enter-from, .fade-in-out-leave-to {
    opacity: 0;
}
.fade-in-out-enter-active, .fade-in-out-leave-active {
    transition: all 0.3s ease-out;
}
.fade-in-out-enter-to, .fade-in-out-leave-from {
    opacity: 1;
}
</style>