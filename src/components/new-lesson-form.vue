<script setup>
import Btn from '../layout/btn.vue';

import Translate from './translate.vue';
import CategoriesList from './categories-list.vue';

import { useLessonsStore } from '../stores/lessons';

const lessonsStore = useLessonsStore();
const schema = {
    title: 'required',
    body: 'required',
    cat_id: 'required'
};

const preTranslate = (target) => {
    return `new_lesson.forms.create.${target}`;
}
const submit = (values) => {
    lessonsStore.createLesson({...values, catId: values['cat_id']});
};
</script>
<template>
    <vee-form id="new-lesson-form" @submit="submit" :validationSchema="schema" class="px-6">
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
                <CategoriesList v-bind="field">
                    <template #pleaseSelect>
                        <option value="" disabled>
                            <Translate :to-translate="preTranslate('cat_id')" />
                        </option>
                    </template>
                </CategoriesList>
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
<style lang="scss">
    #new-lesson-form {
        max-width: 41.2rem;
        margin: 0 auto;
    }
</style>