<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import EditLessonForm from '../components/edit-lesson-form.vue';
import BackBtn from '../components/back-btn.vue';

import { useTranslate } from '../composables/useTranslate';

const id = "edit-lesson";
const { doTranslate } = useTranslate();
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                {{ doTranslate( "edit_lesson.title" ) }}
            </template>
            <template #content>
                <BackBtn />
                <EditLessonForm />
            </template>
        </Scroller>
    </View>
</template>
<style></style>