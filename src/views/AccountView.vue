<script setup>
import { onMounted } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';
import ViewScroller from '../components/view-scroller.vue';

const id="my-account";
const router = useRouter();

onMounted(() => {
    router.push({name: 'login'});
});
</script>
<template>
    <View :id="id">
        <ViewScroller>
            <template #content>
                <div id="tabs-box" class="mx-auto">
                    <div id="tabs-header" class="flex justify-around">
                        <RouterLink :to="{name:'login'}" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize"><Translate toTranslate="account.tabs.login" /></RouterLink>
                        <RouterLink :to="{name:'register'}" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize"><Translate toTranslate="account.tabs.register" /></RouterLink>
                    </div>
                    <div id="tabs-content" class="p-4">
                        <RouterView />
                    </div>
                </div>
            </template>
        </ViewScroller>
    </View>
</template>
<style scoped lang="scss">
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
            border: 0.1rem solid var(--quaternary);
        }
    }
</style>