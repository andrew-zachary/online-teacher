<script setup>
import Btn from '../layout/btn.vue';

import { useUserStore } from '../stores/users';
import { useTranslate } from '../composables/useTranslate';

const userStore = useUserStore();
const { doTranslate } = useTranslate();
const schema = {
    first_name: 'required',
    last_name: 'required',
    email: 'required|email',
    password: 'required',
    confirm_password: 'confirmed:@password'
};

const preTranslate = (target) => {
    return `account.forms.register.${target}`;
};
const submit = (values) => {
    userStore.register({
        ...values,
        firstName:values['first_name'],
        lastName:values['last_name']
    });
};
</script>
<template>
    <vee-form @submit="submit" :validationSchema="schema">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="first_name">
                {{ doTranslate( preTranslate('first_name') ) }}
            </label>
            <vee-field name="first_name" v-slot="{field, errors}">
                <input name="first_name" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="last_name">
                {{ doTranslate( preTranslate('last_name') ) }}
            </label>
            <vee-field name="last_name" v-slot="{field, errors}">
                <input name="last_name" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
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
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="confirm_password">
                {{ doTranslate( preTranslate('confirm_password') ) }}
            </label>
            <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
                <input name="confirm_password" type="password" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div id="register-ctrl" class="w-full mt-8 flex justify-end">
            <Btn :text="preTranslate('btn')" />
        </div>
    </vee-form>
</template>
<style></style>