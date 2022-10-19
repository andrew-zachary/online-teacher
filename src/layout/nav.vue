<script setup>
import { RouterLink } from 'vue-router';

import Translate from '../components/translate.vue';
</script>

<template>
    <nav class="flex px-4 py-12">
        <RouterLink activeClass="active-link" class="text-3xl font-mont capitalize" to="/"><Translate toTranslate="nav.home" /></RouterLink>
        <RouterLink activeClass="active-link" class="text-3xl font-mont capitalize" to="/about"><Translate toTranslate="nav.about" /></RouterLink>
    </nav>
</template>

<style lang="scss">
    nav {
        a {
            @include withRtl('margin', 0 1rem 0 0, 0 0 0 1rem);

            &.active-link {
                font-weight: 700;
                border-bottom: 0.3rem solid var(--ternary);
            }
        }
    }
</style>