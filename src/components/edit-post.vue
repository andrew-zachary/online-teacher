<script setup>
import { useRouter } from 'vue-router';

import Edit from '../assets/edit.vue';
import BtnIcon from '../layout/btn-icon.vue';

const router = useRouter();
const {postId} = defineProps(['postId']);
</script>
<template>
    <BtnIcon 
    :icon="Edit" 
    :click-handler="() => router.push(`/posts/${postId}`)"
    />
</template>
<style></style>