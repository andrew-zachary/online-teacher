<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import Btn from '../layout/btn.vue';
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';

import { useUserStore } from '../stores/users';
import { useAppStore } from '../stores/app';

const userStore = useUserStore();
const appStore = useAppStore();
const route = useRoute();
const id = "forgot-password";
const schema = {
    password: 'required',
    confirm_password: 'confirmed:@password'
};
const preTranslate = (target) => {
    return `account.forms.reset_password.${target}`;
};
const submit = (values) => {
    userStore.reset_password({
        params: {
            email: route.params.email,
            expTimestamp: route.params.expTimestamp,
            token: route.params.token,
        },
        body: {
            newPassword: values.password
        }
    });
};

onBeforeMount(async () => {
    appStore.updateAppSettings({
        lang: appStore.langs.filter(lang => lang.locale === route.params.lang)[0]
    });
});
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="reset_password.title" />
            </template>
            <template #content>
                <vee-form class="max-w-3xl mx-auto p-4" @submit="submit" :validationSchema="schema">
                    <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                        <label for="password">
                            <Translate :to-translate="preTranslate('password')" />
                        </label>
                        <vee-field name="password" v-slot="{ field, errors }">
                            <input name="password" type="password" class="mt-4 p-4 font-popp" v-bind="field" />
                            <div v-if="errors.length"
                                class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                <Translate :to-translate="preTranslate(errors[0])" />
                            </div>
                        </vee-field>
                    </div>
                    <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                        <label for="confirm_password">
                            <Translate :to-translate="preTranslate('confirm_password')" />
                        </label>
                        <vee-field name="confirm_password" v-slot="{ field, errors }" :validateOnInput="true">
                            <input name="confirm_password" type="password" class="mt-4 p-4 font-popp" v-bind="field" />
                            <div v-if="errors.length"
                                class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                                <Translate :to-translate="preTranslate(errors[0])" />
                            </div>
                        </vee-field>
                    </div>
                    <div id="register-ctrl" class="w-full mt-8 flex justify-end">
                        <Btn :text="preTranslate('btn')" />
                    </div>
                </vee-form>
            </template>
        </Scroller>
    </View>
</template>