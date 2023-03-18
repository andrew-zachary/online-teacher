<script setup>
import Loader from '../layout/loader.vue';

import {useAppStore} from '../stores/app';
import { useTranslate } from '../composables/useTranslate';

const appStore = useAppStore();
const { doTranslate } = useTranslate();
</script>
<template>
    <Teleport to="body">
        <div  
        id="page-loader" 
        class="absolute top-0 bottom-0 left-0 right-0 
        bg-quaternary dark:bg-quaternary-dark
        z-50
        flex flex-col items-center justify-center"
        v-if="appStore.togglePageLoader">
            <h1 class="text-4xl capitalize font-mont text-ternary dark:text-amber-50">
                {{ doTranslate( "page_loader.msg" ) }}
            </h1>
            <Loader v-if="appStore.togglePageLoader" />
        </div>
    </Teleport>
</template>
<style></style>