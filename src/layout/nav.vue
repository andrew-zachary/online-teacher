<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="px-4 py-12">
        <RouterLink activeClass="active-link" class="text-3xl font-mont" to="/">Home</RouterLink>
        <RouterLink activeClass="active-link" class="text-3xl font-mont" to="/about">About</RouterLink>
    </nav>
</template>

<style lang="scss">
    nav {
        a {
            @include withRtl('margin', 0 1rem 0 0, 0 0 0 1rem);

            &.active-link {
                font-weight: 700;
                border-bottom: 0.3rem solid $primary;
            }
        }
    }
</style>