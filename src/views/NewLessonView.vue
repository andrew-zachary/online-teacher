<script setup>
import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

import Translate from '../components/translate.vue';
import NewLessonForm from '../components/new-lesson-form.vue';

const id = "new-lesson"
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="new_lesson.title" />
            </template>
            <template #content>
                <NewLessonForm />
            </template>
        </Scroller>
    </View>
</template>
<style lang="scss">
    #new-lesson {
        max-width: 41.2rem;
        margin: 0 auto;
    }
</style>