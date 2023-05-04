<script setup>
import { ref } from 'vue';

import {useUserStore} from '../stores/users'; 

import BarSolid from '../assets/bars-solid.vue';

import BtnIcon from '../layout/btn-icon.vue';
import Nav from '../layout/nav.vue';

const userStore = useUserStore();
const openMenu = ref(false);
const openMenuHandler = () => {
    openMenu.value = !openMenu.value;
}
</script>
<template>
    <nav class="p-4 pt-12 relative flex items-center">
        <div id="nav-btn" class="w-full relative">
            <BtnIcon :icon="BarSolid" @click="openMenu = !openMenu" />
        </div>
        <slot name="authed" v-if="userStore.isAuthed" :openMenu="openMenu" :openMenuHandler="openMenuHandler"></slot>
        <slot name="unAuthed" v-else :openMenu="openMenu" :openMenuHandler="openMenuHandler"></slot>
    </nav>
</template>
<style lang="scss">
nav {

    #nav-btn {
        @media screen and (min-width: 768px) {
            display: none;
        }
    }

    ul {
        transition: all 0.3s linear;
        height: 0vh;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 10;
        overflow: hidden;

        &.animate {
            top: 100%;
            opacity: 1;
            height: 100vh;
        }

        @media screen and (min-width: 768px) {
            display: flex!important;
            height: unset!important;
            position: unset!important;
            top: unset!important;
            left: unset!important;
            opacity: unset!important;
            z-index: unset!important;
        }

        li {
            margin-bottom: 2rem;
            text-align: center;

            @media screen and (min-width: 768px) {
                margin-bottom: 1rem;
            }
            
            a {
                @include withRtl('margin', 0 1rem 0 0, 0 0 0 1rem);

                &.active-link {
                    font-weight: 700;
                    border-bottom: 0.3rem solid;
                    @apply border-ternary dark:border-ternary-dark;
                }
            }
        }
    }
}
</style>