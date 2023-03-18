<script setup>
import { RouterLink } from 'vue-router';

import { useTranslate } from '../composables/useTranslate';

const { openMenu } = defineProps(['openMenu']);
const { doTranslate } = useTranslate();
</script>

<template>
    <ul :class="[{'animate': openMenu}, 'w-full bg-secondary dark:bg-secondary-dark']">
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/links">
                {{ doTranslate( "authed_nav.quick_links" ) }}
            </RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/lessons">
                {{ doTranslate( "authed_nav.lessons" ) }}
            </RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/account-settings">
                {{ doTranslate( "authed_nav.my_account" ) }}
            </RouterLink>
        </li>
    </ul>
</template>