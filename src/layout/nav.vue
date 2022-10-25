<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import Translate from '../components/translate.vue';
import BarSolid from '../assets/bars-solid.vue';

import BtnIcon from './btn-icon.vue';

const openMenu = ref(false);
</script>

<template>
    <nav class="px-4 py-12 relative">
        <div id="nav-btn" class="w-full relative" @click="openMenu = !openMenu">
            <BtnIcon :icon="BarSolid" />
        </div>
        <ul :class="[{'animate': openMenu}, 'w-full bg-secondary dark:bg-secondary-dark']">
            <li>
                <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="text-3xl font-mont capitalize" to="/"><Translate toTranslate="nav.home" /></RouterLink>
            </li>
            <li>
                <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="text-3xl font-mont capitalize" to="/account"><Translate toTranslate="nav.my_account" /></RouterLink>
            </li>
            <li>
                <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="text-3xl font-mont capitalize" to="/lessons"><Translate toTranslate="nav.lessons" /></RouterLink>
            </li>
            <li>
                <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="text-3xl font-mont capitalize" to="/tell-you"><Translate toTranslate="nav.tell_you" /></RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style></style>