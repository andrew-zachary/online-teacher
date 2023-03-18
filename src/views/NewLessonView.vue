<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import NewLessonForm from '../components/new-lesson-form.vue';

import { useTranslate } from '../composables/useTranslate';

const id = "new-lesson";
const { doTranslate } = useTranslate();
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                {{ doTranslate( "new_lesson.title" ) }}
            </template>
            <template #content>
                <NewLessonForm />
            </template>
        </Scroller>
    </View>
</template>
<style></style>