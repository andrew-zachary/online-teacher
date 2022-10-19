<script setup>
import Checkbox from '../layout/checkbox.vue';

const {currentColorMode} = defineProps(['currentColorMode']);
const emit = defineEmits(['modePicked']);

const onChangeHandler = (event) => {
    emit('modePicked', event.target.checked);
}
</script>
<template>
    <Checkbox :onChangeHandler="onChangeHandler" :checked="currentColorMode === 'dark'?true:false" />
</template>
<style></style>