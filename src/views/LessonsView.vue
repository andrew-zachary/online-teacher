<script setup>
import { onMounted, onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router';

import View from '../layout/view.vue';
import Loader from '../layout/loader.vue';
import BtnSolidWithSlot from '../layout/btn-solid-with-slot.vue';

import PaginateScroller from '../components/paginate-scroller.vue';
import ListHeaderSearch from '../components/list-header-search.vue';
import FilteringCatBtn from '../components/filtering-cat-btn.vue';

import { useDebounceFn } from '@vueuse/core';
import { useLessonsStore } from '../stores/lessons.js';
import { useTranslate } from '../composables/useTranslate';

const filteringCat = ref({slug: ''});
const searchInput = ref(null);
const lessonsStore = useLessonsStore();
const id = 'lessons';
const { doTranslate } = useTranslate();

const doFilter = (newCat) => {

    if( lessonsStore.lessons.filteringCat.slug === newCat.slug ) return;
    
    filteringCat.value = newCat;
    lessonsStore.getLessons({search: searchInput.value, cat: filteringCat.value});

};

const resetFiltering = () => {

    filteringCat.value = {slug: ''};
    lessonsStore.getLessons({search: searchInput.value, cat: filteringCat.value});

}

const doSearch = useDebounceFn((searchInputTxt) => {

    searchInput.value = searchInputTxt;

    lessonsStore.getLessons({search: searchInput.value, cat: filteringCat.value});

}, 1000);

const resetSearch = () => {

    if(searchInput.value === '') return;

    searchInput.value = '';
    lessonsStore.getLessons({search: searchInput.value, cat: filteringCat.value});

}

const paginateLessons = () => {

    if(!lessonsStore.lessons.noMore && !lessonsStore.fetching) {

        lessonsStore.getLessons({search: searchInput.value, cat: filteringCat.value});

    }
}

onMounted(() => {

    searchInput.value = lessonsStore.lessons.searchStr;
    filteringCat.value = lessonsStore.lessons.filteringCat;

});

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
                <ListHeaderSearch 
                    :title="doTranslate( 'lessons.title' )" 
                    :previousSearchStr="lessonsStore.lessons.searchStr"
                    @emitDoSearch="doSearch"
                    @emitResetSearch="resetSearch" />
                <FilteringCatBtn :filteringCat="filteringCat" @resetFiltering="resetFiltering" />
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
                        <BtnSolidWithSlot class="mt-4" @click="doFilter(lesson.catId)">{{lesson.catId.title}}</BtnSolidWithSlot>
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