<script setup>
import {useI18n} from 'vue-i18n';

const {toTranslate} = defineProps(['toTranslate']);

const {t} = useI18n();
</script>
<template>{{t(toTranslate.toLowerCase())}}</template>