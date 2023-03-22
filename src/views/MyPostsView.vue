<script setup>
import { onMounted, onBeforeMount, ref } from 'vue';

import View from '../layout/view.vue';
import Loader from '../layout/loader.vue';

import PaginateScroller from '../components/paginate-scroller.vue';
import DeletePost from '../components/delete-post.vue';
import EditPost from '../components/edit-post.vue';
import ListHeaderSearch from '../components/list-header-search.vue';

import { useDebounceFn } from '@vueuse/core';
import { useLessonsStore } from '../stores/lessons.js';
import { useTranslate } from '../composables/useTranslate';

const searchInput = ref(null);
const lessonsStore = useLessonsStore();
const id = 'posts-list';
const { doTranslate } = useTranslate();

const doSearch = useDebounceFn((searchInputTxt) => {

    searchInput.value = searchInputTxt;

    lessonsStore.getMyPosts({search: searchInput.value});

}, 1000);
const resetSearch = () => {

    if(searchInput.value === '') return;

    searchInput.value = '';
    lessonsStore.getMyPosts({search: searchInput.value});

}

const paginateLessons = () => {

    if(!lessonsStore.myPosts.noMore && !lessonsStore.fetching) {

        lessonsStore.getMyPosts({search: searchInput.value});
    }

}

onMounted(() => {

    searchInput.value = lessonsStore.myPosts.searchStr;

});

onBeforeMount(() => {

    if(lessonsStore.myPosts.items.length === 0) {

        lessonsStore.getMyPosts();

    }

});
</script>

<template>
    <View :id="id">
        <PaginateScroller @atBottom="paginateLessons">
            <template #header>
                <ListHeaderSearch 
                    :title="doTranslate( 'posts.title' )" 
                    :previousSearchStr="lessonsStore.myPosts.searchStr"
                    @emitDoSearch="doSearch"
                    @emitResetSearch="resetSearch" />
            </template>
            <template #content>
                <h3 v-if="lessonsStore.fetching"
                class="text-3xl text-ternary dark:text-ternary-dark font-mont font-bold 
                text-center">
                    {{ doTranslate( "posts.searching" ) }} ...
                </h3>
                <h3 v-else-if="lessonsStore.myPosts.items.length === 0 && !lessonsStore.fetching"
                class="text-3xl text-ternary dark:text-ternary-dark font-mont font-bold 
                text-center">
                    {{ doTranslate( "posts.no_posts" ) }}
                </h3>
                <ul class="px-6">
                    <li
                    class="post-item"
                    v-for="post of lessonsStore.myPosts.items"
                    :key="post._id">
                        <h1 class="text-4xl capitalize font-popp font-bold">
                            <a href="#">{{post.title}}</a>
                        </h1>
                        <h2 
                        class="mt-2
                        text-2xl capitalize font-mont">
                            {{post.excerpt}}
                        </h2>
                        <div 
                        class="text-2xl text-secondary capitalize font-mont font-bold
                        mt-6 py-1 px-2 
                        rounded-lg
                        bg-quaternary dark:bg-quaternary-dark
                        inline-block
                        cursor-pointer">
                            {{post.catId.title}}
                        </div>
                        <div class="post-ctrls flex justify-end mt-12">
                            <EditPost :post-id="post._id" />
                            <DeletePost :post-id="post._id" />
                        </div>
                    </li>
                    <li><Loader v-if="lessonsStore.myPosts.items.length > 5 && !lessonsStore.myPosts.noMore" /></li>
                </ul>
            </template>
        </PaginateScroller>
    </View>
</template>

<style scoped lang="scss">
    .post-item {
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