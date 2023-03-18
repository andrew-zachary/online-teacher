<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import Btn from '../layout/btn.vue';

import { useTranslate } from '../composables/useTranslate';

import CategoriesList from './categories-list.vue';
import LanguagesList from './languages-list.vue';

import { useLessonsStore } from '../stores/lessons';

const { doTranslate } = useTranslate();
const route = useRoute();
const lessonsStore = useLessonsStore();
const schema = {
    title: 'required',
    excerpt: 'required',
    body: 'required',
    cat_id: 'required',
    lang: 'required'
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
    <vee-form id="edit-lesson-form" @submit="submit" :initialValues="{...lessonsStore.lesson}" :validationSchema="schema" class="px-6">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="title">
                {{ doTranslate( preTranslate('title') ) }}
            </label>
            <vee-field name="title" v-slot="{field, errors}">
                <input name="title" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="excerpt">
                {{ doTranslate( preTranslate('excerpt') ) }}
            </label>
            <vee-field name="excerpt" v-slot="{field, errors}">
                <input name="excerpt" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="body">
                {{ doTranslate( preTranslate('body') ) }}
            </label>
            <vee-field name="body" v-slot="{field, errors}">
                <textarea name="body" rows="4" cols="50" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8">
            <vee-field name="cat_id" v-slot="{field, errors}">
                <CategoriesList v-bind="field">
                    <template #pleaseSelect>
                        <option value="" disabled>
                            {{ doTranslate( preTranslate('cat_id') ) }}
                        </option>
                    </template>
                </CategoriesList>
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8">
            <vee-field name="lang" v-slot="{field, errors}">
                <LanguagesList v-bind="field">
                    <template #pleaseSelect>
                        <option value="" disabled>
                            {{ doTranslate( preTranslate('lang') ) }}
                        </option>
                    </template>
                </LanguagesList>
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn type="submit" :text="preTranslate('btn')" class="w-full" />
        </div>
    </vee-form>
</template>
<style lang="scss">
    #edit-lesson-form {
        max-width: 41.2rem;
        margin: 0 auto;
    }
</style>