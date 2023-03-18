<script setup>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import View from '../layout/view.vue';

import { useUserStore } from '../stores/users';
import { useAppStore } from '../stores/app';
import { useTranslate } from '../composables/useTranslate';

import Scroller from '../components/scroller.vue';

const id = "accoutn-settings";
const userStore = useUserStore();
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();
const { doTranslate } = useTranslate();

onBeforeMount(async () => {
    appStore.updateAppSettings({
        lang: appStore.langs.filter(lang => lang.locale === route.params.lang)[0]
    });
    await userStore.verifyEmail(route.params.email, route.params.token);
});
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                {{ doTranslate( "verifying.title" ) }}
            </template>
            <template #content>
                <div id="verifying-box" class="px-8 text-5xl">
                    <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                        {{ doTranslate( "verifying.header" ) }}
                    </h1>
                    <button class="py-4
                    mt-12
                    rounded-xl 
                    text-4xl text-secondary font-popp font-regular capitalize 
                    bg-quaternary dark:bg-quaternary-dark 
                    w-full max-w-sm
                    flex flex-col items-center"
                    @click="router.push('/lessons')">
                        <span>
                            {{ doTranslate( "verifying.btn" ) }}
                        </span>
                    </button>
                </div>
            </template>
        </Scroller>
    </View>
</template>