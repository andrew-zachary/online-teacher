<script setup>
import { useAppStore } from '../stores/app';

import BtnBorder from '../layout/btn-border.vue';

const appStore = useAppStore();

const loggingOut = () => console.log('loggedout');
</script>
<template>
    <BtnBorder 
    text="authed_nav.logout" 
    :click-handler="() => appStore.toggleConfirmationModalHandler({
        open:true,
        header:'logout',
        msg:'confirm logout',
        to_confirm: loggingOut})"
    />
</template>
<style></style>