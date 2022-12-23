<script setup>
import { RouterLink } from 'vue-router';

import Translate from '../components/translate.vue';

const { openMenu } = defineProps(['openMenu']);
</script>

<template>
    <ul :class="[{'animate': openMenu}, 'w-full bg-secondary dark:bg-secondary-dark']">    
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/"><Translate toTranslate="nav.home" /></RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/account"><Translate toTranslate="nav.my_account" /></RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/lessons"><Translate toTranslate="nav.lessons" /></RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/tell-you"><Translate toTranslate="nav.tell_you" /></RouterLink>
        </li>
    </ul>
</template>