<script setup>
import { onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router';

import searchIcon from '../assets/search.vue';

import View from '../layout/view.vue';
import Loader from '../layout/loader.vue';
import BtnIcon from '../layout/btn-icon.vue';

import PaginateScroller from '../components/paginate-scroller.vue';

import { useLessonsStore } from '../stores/lessons.js';
import { useTranslate } from '../composables/useTranslate';

const toggleSearch = ref(false);
const lessonsStore = useLessonsStore();
const id = 'lessons';
const { doTranslate } = useTranslate();

const doSearch = () => {
    console.log('test');
}

const showSearchBar = () => {
    toggleSearch.value = !toggleSearch.value;
}

const paginateLessons = () => {
    if(!lessonsStore.lessons.noMore && !lessonsStore.fetching) {
        lessonsStore.getLessons();
    }
}

onBeforeMount(() => {
    if(lessonsStore.lessons.items.length === 0) {
        paginateLessons();
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
                <div v-show="toggleSearch" class="has-inputs p-6 flex">                    
                    <input type="text" placeholder="search for ..." class="p-4 w-full text-3xl capitalize font-mont" />
                    <searchIcon class="h-full" />
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
                        <div 
                        class="text-2xl text-secondary capitalize font-mont font-bold
                        mt-6 py-1 px-2 
                        rounded-lg
                        bg-quaternary dark:bg-quaternary-dark
                        inline-block
                        cursor-pointer
                        ">
                            {{lesson.catId.title}}
                        </div>
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