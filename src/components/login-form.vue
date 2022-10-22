<script setup>
import Btn from '../layout/btn.vue';
import Translate from './translate.vue';

import { useUserStore } from '../stores/users';

const userStore = useUserStore();
const schema = {
    email: 'required|email',
    password: 'required'
};

const preTranslate = (errors) => {
    return `account.forms.login.${errors[0]}`;
}
const submit = (values) => {
    userStore.login(values);
};
</script>
<template>
    <vee-form @submit="submit" :validationSchema="schema">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="email">
                <Translate to-translate="account.forms.login.email" />
            </label>
            <vee-field name="email" v-slot="{field, errors}" :validateOnInput="true">
                <input name="email" type="text" class="mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    <Translate :to-translate="preTranslate(errors)" />
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="password">
                <Translate to-translate="account.forms.login.password" />
            </label>
            <vee-field name="password" v-slot="{field, errors}">
                <input name="password" type="text" class="mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    <Translate :to-translate="preTranslate(errors)" />
                </div>
            </vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn type="submit" text="account.forms.login.btn" />
        </div>
    </vee-form>
</template>
<style></style>