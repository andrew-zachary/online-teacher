<script setup>
    import { ref, onMounted, nextTick, computed } from 'vue';
    import { useTranslate } from '../composables/useTranslate';
    import { useAppStore } from '../stores/app';

    import closeIcon from '../assets/close.vue';
    import searchIcon from '../assets/search.vue';

    import BtnIcon from '../layout/btn-icon.vue';
    import BtnSolidWithSlot from '../layout/btn-solid-with-slot.vue';

    const { previousSearchStr } = defineProps(['title', 'previousSearchStr']);
    const emits = defineEmits(['emitDoSearch', 'emitResetSearch']);

    const toggleSearch = ref(false);
    const searchInput = ref(null);

    const { doTranslate } = useTranslate();
    const appStore = useAppStore();
    const isAppbusy = computed( ()=> appStore.appState === 'busy' ? true : false );

    const showSearchBar = () => { 

        toggleSearch.value = !toggleSearch.value;
        nextTick(() => searchInput.value.focus());
    };

    const clearInputAndReset = () => {

        searchInput.value.value = '';
        emits('emitResetSearch');
    };

    const startSearching = (e) => {

        if(isAppbusy.value) return;

        emits('emitDoSearch', e.target.value);
    };

    onMounted(() => {

        toggleSearch.value = previousSearchStr !== '';
        searchInput.value.value = previousSearchStr;
    });
</script>
<template>
    <div class="flex items-center" v-show="!toggleSearch">
        <h1 class="text-6xl font-bold font-popp text-primary dark:text-primary-dark capitalize">
            {{ title }}
        </h1>
        <BtnIcon :icon="searchIcon" @click="showSearchBar" />
    </div>
    <div v-show="toggleSearch" class="has-inputs p-6 flex items-center">                    
        <input
            type="text" 
            :placeholder="doTranslate( 'searching.searching_for' )"
            class="p-4 w-full text-3xl capitalize font-mont"
            :class="{'input-dim': isAppbusy}"
            ref="searchInput"
            :disabled="isAppbusy"
            @input="startSearching"/>
        <BtnSolidWithSlot class="self-stretch !rounded-none" @click="clearInputAndReset" :disabled="previousSearchStr === '' || isAppbusy">
            <closeIcon class="h-full" />
        </BtnSolidWithSlot>
    </div>
</template>