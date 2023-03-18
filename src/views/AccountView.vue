<script setup>
import { onMounted } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';

import { useTranslate } from '../composables/useTranslate';

import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';

const id="my-account";
const router = useRouter();
const { doTranslate } = useTranslate();

onMounted(() => {
    router.push({name: 'login'});
});
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #content>
                <div id="tabs-box" class="mx-auto px-6">
                    <div id="tabs-header" class="flex justify-around">
                        <RouterLink :to="{name:'login'}" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize">{{ doTranslate( "account.tabs.login" ) }}</RouterLink>
                        <RouterLink :to="{name:'register'}" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize">{{ doTranslate( "account.tabs.register" ) }}</RouterLink>
                    </div>
                    <div id="tabs-content">
                        <RouterView />
                    </div>
                </div>
            </template>
        </Scroller>
    </View>
</template>
<style lang="scss">
    #tabs-box {
        max-width: 37.5rem;

        #tabs-header {
    
            a {
                color: var(--ternary);
                border-radius: 10px 10px 0 0;

                &.active-link {
                    font-weight: 700;
                    color: rgb(209 250 229);
                    background: var(--quaternary);
                }
            }
        }
        #tabs-content {

            form {

                padding: 1rem;
                border: 0.1rem solid var(--quaternary);
            }
        }
    }
</style>