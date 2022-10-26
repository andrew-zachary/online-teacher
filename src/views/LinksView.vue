<script setup>
import { RouterLink } from 'vue-router';

import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

import Translate from '../components/translate.vue';

const id = "links";
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="links.go_to" />
            </template>
            <template #content>
                <ul id="links">
                    <li>
                        <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="mb-8 block" to="/posts">
                            <h3 class="text-3xl font-popp font-bold capitalize">
                                <Translate toTranslate="links.names.posts.title" />
                            </h3>
                            <p class="text-2xl font-popp capitalize">
                                <Translate toTranslate="links.names.posts.desc" />
                            </p>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink @click="openMenu = !openMenu" activeClass="active-link" class="mb-8 block" to="/new-lesson">
                            <h3 class="text-3xl font-popp font-bold capitalize">
                                <Translate toTranslate="links.names.create_lesson.title" />
                            </h3>
                            <p class="text-2xl font-popp capitalize">
                                <Translate toTranslate="links.names.create_lesson.desc" />
                            </p>
                        </RouterLink>
                    </li>
                </ul>
            </template>
        </Scroller>
    </View>
</template>
<style lang="scss">
    #links ul {

        @include withRtl('padding', 0 0 0 2rem, 0 2rem 0 0);
    }
</style>