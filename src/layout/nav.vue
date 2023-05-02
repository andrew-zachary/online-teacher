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
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/">{{ doTranslate( "nav.home" ) }}</RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/account">{{ doTranslate( "nav.my_account" ) }}</RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/lessons">{{ doTranslate( "nav.lessons" ) }}</RouterLink>
        </li>
        <li>
            <RouterLink @click="$emit('openMenuToggle')" activeClass="active-link" class="text-3xl font-mont capitalize" to="/tell-you">{{ doTranslate( "nav.tell_you" ) }}</RouterLink>
        </li>
    </ul>
</template>