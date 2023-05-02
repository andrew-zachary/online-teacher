<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import { useAppStore } from '../stores/app';
import { useTranslate } from '../composables/useTranslate';

const { openMenu } = defineProps(['openMenu']);

const appStore = useAppStore();
const { doTranslate } = useTranslate();

const navIsDim = computed( () => appStore.appState === 'busy' ? true : false );
</script>

<template>
    <ul :class="[{'animate': openMenu, 'nav-dim': navIsDim}, 'w-full bg-secondary dark:bg-secondary-dark']">
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