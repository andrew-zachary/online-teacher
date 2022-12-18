<script setup>
import { useRoute, useRouter } from 'vue-router';

import { useAppStore } from '../stores/app';
import { useUserStore } from '../stores/users';

import BtnBorder from '../layout/btn-border.vue';

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();
const userStore = useUserStore();

const logout = () => {
    userStore.logout();

    if(route.meta.requireAuth) {
        router.push({name: 'home'});
    }
};
</script>
<template>
    <BtnBorder 
    text="authed_nav.logout" 
    :click-handler="() => appStore.toggleConfirmationModalHandler({
        open:true,
        header:'modal.logout.header',
        msg:'modal.logout.msg',
        to_confirm: logout})"
    />
</template>
<style></style>