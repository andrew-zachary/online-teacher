<script setup>
import Loader from '../layout/loader.vue';

import Translate from './translate.vue';

import {useAppStore} from '../stores/app';
const appStore = useAppStore();
</script>
<template>
    <Teleport to="body">
        <div  
        id="page-loader" 
        class="absolute top-0 bottom-0 left-0 right-0 
        bg-green-800
        z-50
        flex flex-col items-center justify-center"
        v-if="appStore.togglePageLoader">
            <h1 class="text-4xl capitalize font-mont text-amber-50">
                <Translate to-translate="page_loader.msg" />
            </h1>
            <Loader v-if="appStore.togglePageLoader" />
        </div>
    </Teleport>
</template>
<style></style>