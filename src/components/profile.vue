<script setup>
import {onMounted} from 'vue';

import {useUserStore} from '../stores/users';

const userStore = useUserStore();

onMounted(() => {
    userStore.getProfile();
});
</script>
<template></template>
<style></style>