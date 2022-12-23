<script setup>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import View from '../layout/view.vue';

import { useUserStore } from '../stores/users';
import { useAppStore } from '../stores/app';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';

const id = "accoutn-settings";
const userStore = useUserStore();
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

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
                <Translate to-translate="verifying.title" />
            </template>
            <template #content>
                <div id="verifying-box" class="px-8 text-5xl">
                    <h1 class="font-bold font-popp text-primary dark:text-primary-dark capitalize">
                        <Translate to-translate="verifying.header" />
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
                            <Translate to-translate="verifying.btn" />
                        </span>
                    </button>
                </div>
            </template>
        </Scroller>
    </View>
</template>