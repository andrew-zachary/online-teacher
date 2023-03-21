<script setup>
import { onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router';

import closeIcon from '../assets/close.vue';
import searchIcon from '../assets/search.vue';

import View from '../layout/view.vue';
import Loader from '../layout/loader.vue';
import BtnIcon from '../layout/btn-icon.vue';
import BtnSolidWithSlot from '../layout/btn-solid-with-slot.vue';

import PaginateScroller from '../components/paginate-scroller.vue';

import { useDebounceFn } from '@vueuse/core';
import { useLessonsStore } from '../stores/lessons.js';
import { useTranslate } from '../composables/useTranslate';

const toggleSearch = ref(false);
const searchInput = ref(null);
const lessonsStore = useLessonsStore();
const id = 'lessons';
const { doTranslate } = useTranslate();

const doSearch = useDebounceFn(() => {

    lessonsStore.getLessons({search: searchInput.value.value});

}, 1000);
const resetSearch = () => {

    searchInput.value.value = '';
    lessonsStore.getLessons({search: searchInput.value.value});

}

const showSearchBar = () => {

    toggleSearch.value = !toggleSearch.value;

}

const paginateLessons = () => {

    if(!lessonsStore.lessons.noMore && !lessonsStore.fetching) {

        lessonsStore.getLessons({search: searchInput.value.value});

    }
}

onBeforeMount(() => {

    if(lessonsStore.lessons.items.length === 0) {
        
        lessonsStore.getLessons();

    }

});
</script>

<template>
    <View :id="id">
        <PaginateScroller @atBottom="paginateLessons">
            <template #header>
                <div class="flex items-center" v-show="!toggleSearch">
                    <h1 class="text-6xl font-bold font-popp text-primary dark:text-primary-dark capitalize">
                        {{ doTranslate( "lessons.title" ) }}
                    </h1>
                    <BtnIcon :icon="searchIcon" @click="showSearchBar" />
                </div>
                <div v-show="toggleSearch" class="has-inputs p-6 flex items-center">                    
                    <input
                        type="text" 
                        placeholder="search for ..." 
                        class="p-4 w-full text-3xl capitalize font-mont" 
                        ref="searchInput" 
                        @input="doSearch"/>
                    <BtnSolidWithSlot class="rounded-none self-stretch">
                        <closeIcon class="h-full" @click="resetSearch" />
                    </BtnSolidWithSlot>
                </div>
            </template>
            <template #content>
                <h3 
                class="text-3xl text-ternary dark:text-ternary-dark font-mont font-bold 
                text-center" 
                v-if="lessonsStore.fetching">
                    {{ doTranslate( "lessons.searching" ) }} ...
                </h3>
                <ul class="w-full px-6">
                    <li
                    class="lesson-item"
                    v-for="lesson of lessonsStore.lessons.items"
                    :key="lesson._id">
                        <h1 class="text-4xl capitalize font-popp font-bold">
                            <RouterLink :to="`/lessons/${lesson._id}`">{{lesson.title}}</RouterLink>
                        </h1>
                        <h2 
                        class="mt-2
                        text-2xl capitalize font-mont">{{lesson.excerpt}}</h2>
                        <BtnSolidWithSlot class="mt-4">{{lesson.catId.title}}</BtnSolidWithSlot>
                    </li>
                    <li><Loader v-if="lessonsStore.lessons.items.length > 5 && !lessonsStore.lessons.noMore" /></li>
                </ul>
            </template>
        </PaginateScroller>
    </View>
</template>

<style scoped lang="scss">
    .has-inputs {
        
        svg {
            max-width: 4.45rem;
        }
    }
    .lesson-item {
        margin-bottom: 3rem;
        border-bottom: 0.1rem solid var(--primary);
        padding-bottom: 0.5rem;

        &:last-child {
            margin: 0;
            padding: 0;
            border:unset;
        }
    }
</style>