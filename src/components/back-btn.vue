<script setup>
import { useRouter } from 'vue-router';

import BtnIcon from '../layout/btn-icon.vue';
import ArrowLeft from '../assets/arrow-left.vue';

const router = useRouter();
</script>
<template>
    <BtnIcon :icon="ArrowLeft" :click-handler="router.back" />
</template>
<style></style>