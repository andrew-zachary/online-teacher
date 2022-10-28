<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Btn from '../layout/btn.vue';
import Translate from './translate.vue';

import { useLessonsStore } from '../stores/lessons';

const route = useRoute();
const lessonsStore = useLessonsStore();
const schema = {
    title: 'required',
    body: 'required',
    cat_id: 'required'
};

const preTranslate = (target) => {
    return `edit_lesson.forms.edit.${target}`;
}
const submit = (values) => {
    lessonsStore.updatePost(route.params.id, {...values, catId: values['cat_id']});
};

onBeforeMount(() => {
    lessonsStore.getLesson(route.params.id);
})
</script>
<template>
    <vee-form id="edit-lesson" @submit="submit" :initialValues="{...lessonsStore.lesson}" :validationSchema="schema" class="px-6">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="title">
                <Translate :to-translate="preTranslate('title')" />
            </label>
            <vee-field name="title" v-slot="{field, errors}">
                <input name="title" type="text" class="mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    <Translate :to-translate="preTranslate(errors[0])" />
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="body">
                <Translate :to-translate="preTranslate('body')" />
            </label>
            <vee-field name="body" v-slot="{field, errors}">
                <textarea name="body" rows="4" cols="50" class="mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    <Translate :to-translate="preTranslate(errors[0])" />
                </div>
            </vee-field>
        </div>
        <div class="mt-8">
            <vee-field name="cat_id" v-slot="{field, errors}">
                <select name="cat_id" id="cat_id" class="p-4 text-3xl font-mont capitalize" v-bind="field">
                    <option value="" disabled><Translate :to-translate="preTranslate('cat_id')" /></option>
                    <option value="62f3a65aadbbad238ad2dc53">cat 1 update</option>
                    <option value="62f3a662adbbad238ad2dc55">cat 2</option>
                    <option value="62f3a667adbbad238ad2dc57">cat 3</option>
                    <option value="62f3a66badbbad238ad2dc59">cat 4</option>
                    <option value="62f3a673adbbad238ad2dc5b">cat 5</option>
                    <option value="62f3a67cadbbad238ad2dc5d">cat 6</option>
                    <option value="62f3a697adbbad238ad2dc61">all</option>
                </select>
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    <Translate :to-translate="preTranslate(errors[0])" />
                </div>
            </vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn type="submit" :text="preTranslate('btn')" class="w-full" />
        </div>
    </vee-form>
</template>
<style></style>