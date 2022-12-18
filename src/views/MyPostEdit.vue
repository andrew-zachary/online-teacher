<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';
import EditLessonForm from '../components/edit-lesson-form.vue';
import BackBtn from '../components/back-btn.vue';

const id = "edit-lesson";
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="edit_lesson.title" />
            </template>
            <template #content>
                <BackBtn />
                <EditLessonForm />
            </template>
        </Scroller>
    </View>
</template>
<style></style>