<script setup>
import { RouterView, RouterLink } from 'vue-router';
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';
import ViewScroller from '../components/view-scroller.vue';

const id="my-account";
</script>
<template>
    <View :id="id">
        <ViewScroller>
            <template #content>
                <div id="account-tabs" class="w-full mx-auto flex justify-around">
                    <RouterLink to="/account/login" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize"><Translate toTranslate="account.tabs.login" /></RouterLink>
                    <RouterLink to="/account/register" activeClass="active-link" class="w-full p-4 text-center text-3xl font-popp capitalize"><Translate toTranslate="account.tabs.register" /></RouterLink>
                </div>
                <div id="tab-content">
                    <RouterView />
                </div>
            </template>
        </ViewScroller>
    </View>
</template>
<style scoped lang="scss">
    #account-tabs {
        max-width: 25rem;

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
    #tab-content {
        border: 0.1rem solid var(--quaternary);
    }
</style>