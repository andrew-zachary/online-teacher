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
                        border-bottom: 0.3rem solid var(--ternary);
                    }
                }
            }
        }
    }
</style>