<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import BackBtn from '../components/back-btn.vue';

import { useLessonsStore } from '../stores/lessons.js';

const lessonsStore = useLessonsStore();
const route = useRoute();
const id = 'lessons';

onBeforeMount(() => {
    lessonsStore.getLesson(route.params.id);
});
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #nav-btns>
                <div class="mb-8"><BackBtn /></div>
            </template>
            <template #header>
                {{lessonsStore.lesson.title}}
            </template>
            <template #content>
                <div id="single-lesson" class="p-4">
                    <h3 
                    class="mt-4 text-3xl font-mont">{{lessonsStore.lesson.excerpt}}</h3>
                    <p
                    class="mt-8 text-4xl font-mont">{{lessonsStore.lesson.body}}</p>
                </div>
            </template>
        </Scroller>
    </View>
</template>
<style></style>