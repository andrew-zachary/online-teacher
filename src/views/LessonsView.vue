<script setup>
import {onBeforeMount} from 'vue';

import View from '../layout/view.vue';
import Loader from '../layout/loader.vue';

import Translate from '../components/translate.vue';
import PaginateScroller from '../components/paginate-scroller.vue';

import { useLessonsStore } from '../stores/lessons.js';

const lessonsStore = useLessonsStore();
const id = 'lessons';

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
                <Translate toTranslate="lessons.title" />
            </template>
            <template #content>
                <ul class="px-6">
                    <li
                    class="lesson-item"
                    v-for="lesson of lessonsStore.lessons.items"
                    :key="lesson._id">
                        <h1 class="text-4xl capitalize font-popp font-bold">
                            <a href="#">{{lesson.title}}</a>
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