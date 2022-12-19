<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';
import Btn from '../layout/btn.vue';
import { useUserStore } from '../stores/users';

const id = "accoutn-settings";
const userStore = useUserStore();
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
}
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="account_settings.title" />
            </template>
            <template #content>
                <div id="settings-box" class="px-8 text-4xl">
                    <section id="mail-settings">
                        <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                            <Translate to-translate="account.tabs.email" />
                        </h1>
                        <p>{{ userStore.profileData.email.address }}</p>
                        <button class="py-4
                        rounded-xl 
                        text-4xl text-secondary font-popp font-regular capitalize 
                        bg-quaternary dark:bg-quaternary-dark 
                        w-full max-w-sm
                        flex flex-col items-center"
                        @click="sendVerificationMail">
                            <span>
                                <Translate :to-translate="userStore.profileData.email.verified? 'account.forms.email_verification.yes' : 'account.forms.email_verification.not_verified'" />
                            </span>
                            <span class="text-2xl text-secondary bg-quaternary dark:bg-quaternary-dark">
                                <Translate to-translate="account.forms.email_verification.btn" />
                            </span>
                        </button>
                    </section>
                    <section id="password-settings" class="mt-14">
                        <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                            <Translate to-translate="account.tabs.password" />
                        </h1>
                        <vee-form class="max-w-5xl mx-auto" @submit="changePassword" :validationSchema="newPasswordSchema">
                            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                                <label for="current_password">
                                    <Translate :to-translate="preTranslate('current_password')" />
                                </label>
                                <vee-field name="current_password" v-slot="{field, errors}">
                                    <input name="current_password" type="password" class="mt-4 p-4 font-popp" v-bind="field" />
                                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                        <Translate :to-translate="preTranslate(errors[0])" />
                                    </div>
                                </vee-field>
                            </div>
                            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                                <label for="new_password">
                                    <Translate :to-translate="preTranslate('new_password')" />
                                </label>
                                <vee-field name="new_password" v-slot="{field, errors}">
                                    <input name="new_password" type="password" class="mt-4 p-4 font-popp" v-bind="field" />
                                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                        <Translate :to-translate="preTranslate(errors[0])" />
                                    </div>
                                </vee-field>
                            </div>
                            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                                <label for="confirm_password">
                                    <Translate :to-translate="preTranslate('confirm_password')" />
                                </label>
                                <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
                                    <input name="confirm_password" type="password" class="mt-4 p-4 font-popp" v-bind="field" />
                                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                        <Translate :to-translate="preTranslate(errors[0])" />
                                    </div>
                                </vee-field>
                            </div>
                            <div id="change-password-ctrl" class="w-full mt-8 flex justify-end">
                                <Btn :text="preTranslate('btn')" />
                            </div>
                        </vee-form>
                    </section>
                </div>
            </template>
        </Scroller>
    </View>
</template>
<style lang="scss">
    #mail-settings {
        p, button {
            @include withRtl('margin', 2rem 0 0 2rem, 2rem 2rem 0 0);
        }
    }
</style>