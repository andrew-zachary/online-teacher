<script setup>
import { RouterLink } from 'vue-router';

import Btn from '../layout/btn.vue';

import { useUserStore } from '../stores/users';
import { useTranslate } from '../composables/useTranslate';

const userStore = useUserStore();
const { doTranslate } = useTranslate();
const schema = {
    email: 'required|email',
    password: 'required'
};
const preTranslate = (target) => {
    return `account.forms.login.${target}`;
}
const submit = (values) => {
    userStore.login(values);
};
</script>
<template>
    <vee-form @submit="submit" :validationSchema="schema">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="email">
                {{ doTranslate( preTranslate('email') ) }}
            </label>
            <vee-field name="email" v-slot="{field, errors}" :validateOnInput="true">
                <input name="email" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="password">
                {{ doTranslate( preTranslate('password') ) }}
            </label>
            <vee-field name="password" v-slot="{field, errors}">
                <input name="password" type="password" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn type="submit" :text="preTranslate('btn')" />
        </div>
    </vee-form>
    <div id="forgot-password-ctrl" class="text-3xl flex justify-center mt-12">
        <RouterLink class="font-popp font-regular border-b border-black display-block" :to="{name: 'forgot-password'}">
            {{ doTranslate( "forgot_password.btn" ) }}
        </RouterLink>
    </div>
</template>
<style></style>