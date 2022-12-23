<script setup>
import { RouterLink } from 'vue-router';

import Translate from '../components/translate.vue';

const { openMenu } = defineProps(['openMenu']);
</script>

<template>
    <ul :class="[{'animate': openMenu}, 'w-full bg-secondary dark:bg-secondary-dark']">
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/links">
                <Translate toTranslate="authed_nav.quick_links" />
            </RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/lessons">
                <Translate toTranslate="authed_nav.lessons" />
            </RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/account-settings">
                <Translate toTranslate="authed_nav.my_account" />
            </RouterLink>
        </li>
    </ul>
</template>