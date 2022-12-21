<script setup>
import {useUserStore} from '../stores/users'; 

import Nav from '../layout/nav.vue'
import AuthedNav from '../layout/authed-nav.vue'

const userStore = useUserStore();
</script>
<template>
    <AuthedNav v-if="userStore.isAuthed"></AuthedNav>
    <Nav v-else></Nav>
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
                    border-bottom: 0.3rem solid var(--ternary);
                }
            }
        }
    }
}
</style>