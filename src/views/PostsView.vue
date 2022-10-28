<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="posts">
        <RouterView v-slot="{Component}">
            <transition name="posts-edit" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </RouterView>
    </div>
</template>

<style lang="scss">
.posts-edit-enter-from, .posts-edit-leave-to {
    opacity: 0;
}
.posts-edit-enter-active, .posts-edit-leave-active {
    transition: all 0.5s ease-out;
}
.posts-edit-enter-to, .posts-edit-leave-from {
    opacity: 1;
}
</style>