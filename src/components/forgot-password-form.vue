<script setup>
import Btn from '../layout/btn.vue';
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';

import { useUserStore } from '../stores/users';

const userStore = useUserStore();
const id = "forgot-password";
const schema = {
    email: 'required|email'
};
const preTranslate = (target) => {
    return `account.forms.forgot_password.${target}`;
};
const submit = (values) => {
    userStore.send_forgot_password_mail(values);
};
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="forgot_password.title" />
            </template>
            <template #content>
                <vee-form class="max-w-3xl mx-auto p-4" @submit="submit" :validationSchema="schema">
                    <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                        <label for="email">
                            <Translate :to-translate="preTranslate('email')" />
                        </label>
                        <vee-field name="email" v-slot="{ field, errors }" :validateOnInput="true">
                            <input name="email" type="text" class="w-full mt-4 p-4 font-popp" v-bind="field" />
                            <div v-if="errors.length"
                                class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                <Translate :to-translate="preTranslate(errors[0])" />
                            </div>
                        </vee-field>
                    </div>
                    <div id="login-ctrl" class="w-full mt-8 flex justify-end">
                        <Btn type="submit" :text="preTranslate('btn')" />
                    </div>
                </vee-form>
            </template>
        </Scroller>
    </View>
</template>
