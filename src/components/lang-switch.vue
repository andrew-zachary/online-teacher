<script setup>
import {ref} from 'vue';
import ArrowDown from '../assets/arrow-down.svg';

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
            <div class="text-2xl font-pop font-regular">{{pickedLang.name}}</div>
            <img :src="ArrowDown" />
        </div>
        <ul v-if="open" id="langs-list" class="pt-2">
            <li class="mb-2 cursor-pointer text-2xl font-pop font-regular" v-for="lang of langs" :key="lang.code" @click="pickingLang(lang.index)">
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

        img {
            width: 2rem;
        }
    }
</style>