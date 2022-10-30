<script setup>
import { onBeforeMount } from 'vue';

import { useCategoriesStore } from '../stores/categories';

import Translate from './translate.vue';

const {field, errors, preTranslate} = defineProps(['field', 'errors', 'preTranslate']);
const useCategories = useCategoriesStore();

onBeforeMount(() => {
    if(useCategories.cats.items.length === 0) {
        useCategories.getAllCategories();
    }
});
</script>
<template>
    <select name="cat_id" id="cat_id" class="p-4 text-3xl font-mont capitalize" v-bind="field">
        <option value="" disabled><Translate :to-translate="preTranslate('cat_id')" /></option>
        <option v-for="cat of useCategories.cats.items" :key="cat._id" :value="cat._id">{{cat.title}}</option>
    </select>
    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
        <Translate :to-translate="preTranslate(errors[0])" />
    </div>
</template>
<style></style>