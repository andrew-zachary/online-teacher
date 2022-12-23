<script setup>
import {ref, watch} from 'vue';

import ArrowDown from '../assets/arrow-down.vue';

import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const {currentLang, langs} = defineProps(['currentLang', 'langs']);
const emit = defineEmits(['langPicked']);
const pickedLang = ref(currentLang);
const open = ref(false);
const pickingLang = (lang) => {
    open.value = !open.value;
    pickedLang.value = lang;
    emit('langPicked', lang);
};

watch(() => appStore.currentLang, (lang) => {
    pickedLang.value = lang;
});
</script>
<template>
    <div id="lang-switch">
        <div 
        id="lang-tag"
        class="flex items-center justify-between"
        @click="open = !open">
            <div class="text-2xl font-popp font-regular">{{pickedLang.name}}</div>
            <Component :is="ArrowDown" />
        </div>
        <ul v-if="open" id="langs-list" class="pt-2">
            <li class="mb-2 cursor-pointer text-2xl font-popp font-regular" v-for="lang of langs" :key="lang.locale" @click="pickingLang(lang)">
                <template v-if="pickedLang.index !== lang.index">
                    {{lang.name}}
                </template>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    #lang-switch {
        max-width: 12.5rem;

        #lang-tag > div {
            @include withRtl('margin', 0 2rem 0 0, 0 0 0 2rem);
        }

        svg {
            width: 2rem;
            fill: var(--ternary);
        }
    }
</style>