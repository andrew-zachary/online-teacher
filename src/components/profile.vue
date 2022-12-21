<script setup>
import {onBeforeMount} from 'vue';

import {useUserStore} from '../stores/users';

const userStore = useUserStore();

onBeforeMount(() => { userStore.getProfile() });
</script>
<template></template>
<style></style>