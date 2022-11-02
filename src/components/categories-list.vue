<script setup>
import { onBeforeMount } from 'vue';

import { useCategoriesStore } from '../stores/categories';

const useCategories = useCategoriesStore();

onBeforeMount(() => {
    if(useCategories.cats.items.length === 0) {
        useCategories.getAllCategories();
    }
});
</script>
<template>
    <select name="cat_id" id="cat_id" class="p-4 text-3xl font-mont capitalize">
        <slot name="pleaseSelect"></slot>
        <option v-for="cat of useCategories.cats.items" :key="cat._id" :value="cat._id">{{cat.title}}</option>
    </select>
</template>
<style></style>