<script setup>
    import { computed } from 'vue';

    import close from '../assets/close.vue';
    import BtnIcon from '../layout/btn-icon.vue';

    import { useAppStore } from '../stores/app';

    const emits = defineEmits(['resetFiltering']);
    const appStore = useAppStore();
    const isAppBusy = computed(() => appStore.appState === 'busy'? true : false);

    const resetFiltering = () => {

        if(isAppBusy.value) return;

        emits('resetFiltering');
    };

    defineProps(['filteringCat']);
</script>
<template>
    <div class="filtering-cat-btn px-6 py-2
        inline-block
        text-3xl text-primary dark:text-secondary capitalize font-mont font-bold"
    >
        <div v-if="filteringCat.slug !== ''"
            class="flex border-2 border-primary dark:border-primary-dark py-1 px-4 cursor-pointer rounded-full"
            :class="{'box-dim': isAppBusy}"
            @click="resetFiltering">
            <span>{{ filteringCat.slug }}</span> <BtnIcon :icon="close" class="p-0" />
        </div>
        <div v-else class="py-2 px-4">
            {{ 'all' }}
        </div>
    </div>
</template>
<style lang="scss">
    .filtering-cat-btn {
        
        div {
            
            span {
                @include withRtl('align-self', center, flex-end);
                @include withRtl('line-height', 1, 0.9);
            }
        }
    }
</style>