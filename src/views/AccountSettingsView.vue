<script setup>
import { reactive, watch } from 'vue';

import View from '../layout/view.vue';
import Btn from '../layout/btn.vue';

import Scroller from '../components/scroller.vue';
import ColorSwitch from '../components/color-switch.vue';
import LangSwitch from '../components/lang-switch.vue';

import { useUserStore } from '../stores/users';
import { useAppStore } from '../stores/app';
import { useTranslate } from '../composables/useTranslate';

const id = "accoutn-settings";
const userStore = useUserStore();
const appStore = useAppStore();
const { doTranslate } = useTranslate();
const preTranslate = (target) => {
    return `account.forms.change_password.${target}`;
};
const newPasswordSchema = {
    current_password: 'required',
    new_password: 'required',
    confirm_password: 'confirmed:@new_password'
};
const changePassword = (values) => {
    userStore.changePassword({
        oldPassword: values['current_password'],
        newPassword: values['new_password'],
    })
};
const sendVerificationMail = () => {
    userStore.sendVerificationMail();
};
const newSettings = reactive({
    lang: appStore.currentLang,
    darkModeChecked: appStore.currentColorMode === 'dark'
});
const langPicked = (lang) => {
    newSettings.lang = lang;
};
const modePicked = (checked) => {
    newSettings.darkModeChecked = checked;
};
const saveChanges = () => {
    userStore.update_preferences(newSettings);
};

watch([
    () => appStore.currentLang,
    () => appStore.currentColorMode
], ([lang, currentColorMode]) => {
    newSettings.lang = lang;
    newSettings.darkModeChecked = currentColorMode === 'light' ? false : true;
});
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                {{ doTranslate( "account_settings.title" ) }}
            </template>
            <template #content>
                <div v-if="userStore.profileData._id" id="settings-box" class="px-8 text-4xl">
                    <section id="mail-settings">
                        <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                            {{ doTranslate( "account.tabs.email" ) }}
                        </h1>
                        <div id="mail-settings-box" class="max-w-3xl mx-auto">
                            <p class="w-full max-w-sm break-words text-3xl">
                                <span>{{ userStore.profileData.email.address }}</span>
                            </p>
                            <button class="py-4
                            rounded-xl 
                            text-4xl text-secondary font-popp font-regular capitalize 
                            bg-quaternary dark:bg-quaternary-dark 
                            w-full max-w-sm
                            flex flex-col items-center"
                            v-if="!userStore.profileData.email.verified"
                            @click="sendVerificationMail">
                                <span>
                                    {{ doTranslate( "account.forms.email_verification.not_verified" ) }}
                                </span>
                                <span class="text-2xl text-secondary bg-quaternary dark:bg-quaternary-dark">
                                    {{ doTranslate( "account.forms.email_verification.btn" ) }}
                                </span>
                            </button>
                            <div v-else class="py-4
                            border border-quaternary
                            text-4xl font-popp font-regular capitalize text-center
                            w-full max-w-sm">
                                {{ doTranslate( "account.forms.email_verification.yes" ) }}
                            </div>
                        </div>
                    </section>
                    <section id="password-settings" class="mt-14">
                        <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                            {{ doTranslate( "account.tabs.password" ) }}
                        </h1>
                        <vee-form class="max-w-3xl mx-auto" @submit="changePassword" :validationSchema="newPasswordSchema">
                            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                                <label for="current_password">
                                    {{ doTranslate( preTranslate('current_password') ) }}
                                </label>
                                <vee-field name="current_password" v-slot="{field, errors}">
                                    <input name="current_password" type="password" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                        {{ doTranslate( preTranslate(errors[0]) ) }}
                                    </div>
                                </vee-field>
                            </div>
                            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                                <label for="new_password">
                                    {{ doTranslate( preTranslate('new_password') ) }}
                                </label>
                                <vee-field name="new_password" v-slot="{field, errors}">
                                    <input name="new_password" type="password" class="w-full mt-4 p-4 font-popp" v-bind="field" />
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
                            <div id="change-password-ctrl" class="w-full mt-8 flex justify-end">
                                <Btn :text="preTranslate('btn')" />
                            </div>
                        </vee-form>
                    </section>
                    <section id="preferences-settings" class="mt-14">
                        <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                            {{ doTranslate( "account_settings.preferences" ) }}
                        </h1>
                        <div id="preferences-settings-box" class="max-w-3xl mx-auto">
                            <div class="ctrl-row">
                                <div class="font-bold">
                                    {{ doTranslate( "account_settings.dark_mode" ) }}
                                </div>
                                <ColorSwitch @modePicked="modePicked" :currentColorMode="appStore.currentColorMode" />
                            </div>
                            <div class="ctrl-row">
                                <div class="font-bold">
                                    {{ doTranslate( "account_settings.language" ) }}
                                </div>
                                <LangSwitch @langPicked="langPicked" :currentLang="newSettings.lang" :langs="appStore.langs" />
                            </div>
                            <div id="preferences-ctrl" class="w-full mt-8 flex justify-end">
                                <Btn @click="saveChanges" text="account_settings.save" />
                            </div>
                        </div>
                    </section>
                </div>
            </template>
        </Scroller>
    </View>
</template>
<style lang="scss">
    #mail-settings {
        button {
            @include withRtl('margin', 2rem 0 0 2rem, 2rem 2rem 0 0);
        }
    }
    .ctrl-row {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0 0 0;
        width: 100%;
        max-width: 25rem;
    }
</style>