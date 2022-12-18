<script setup>
import { useAppStore } from '../stores/app';
import { useLessonsStore } from '../stores/lessons';

import Trash from '../assets/trash.vue';
import BtnIcon from '../layout/btn-icon.vue';

const {postId} = defineProps(['postId']);

const appStore = useAppStore();
const lessonStore = useLessonsStore();

const deletePost = () => {
    lessonStore.deletePost(postId);
}
</script>
<template>
    <BtnIcon 
    :icon="Trash" 
    @click="() => appStore.toggleConfirmationModalHandler({
        open:true,
        header:'modal.delete_post.header',
        msg:'modal.delete_post.msg',
        to_confirm: deletePost})"
    />
</template>
<style></style>