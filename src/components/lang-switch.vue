<script setup>
import {ref} from 'vue';

const {currentLang, langs} = defineProps(['currentLang', 'langs']);
const emit = defineEmits(['langPicked']);

const pickedLang = ref(currentLang);
const open = ref(false);

const pickingLang = (langIndex) => {
    open.value = !open.value;
    pickedLang.value = langs[langIndex];
    emit('langPicked', langIndex);
}
</script>
<template>
    <div id="lang-switch">
        <div 
            id="lang-tag" 
            class="flex items-center justify-between"
            @click="open = !open">
            <div class="text-2xl font-popp font-regular">{{pickedLang.name}}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 510"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
        </div>
        <ul v-if="open" id="langs-list" class="pt-2">
            <li class="mb-2 cursor-pointer text-2xl font-popp font-regular" v-for="lang of langs" :key="lang.locale" @click="pickingLang(lang.index)">
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