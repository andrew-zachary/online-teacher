<script setup>
import BtnIcon from './btn-icon.vue';
import CloseIcon from '../assets/close.vue';

import {useAppStore} from '../stores/app';
const appStore = useAppStore();
</script>
<template>
    <Teleport to="body">
        <Transition name="modal-in-out">
            <div 
                id="app-modal" 
                class="flex items-center justify-center 
                absolute top-0 bottom-0 left-0 right-0" 
                v-if="appStore.toggleAppModal">
                <div 
                    id="modal-drop-bg" 
                    class="z-40 
                    absolute top-0 bottom-0 left-0 right-0
                    bg-ternary dark:bg-ternary-dark" 
                    @click="appStore.toggleAppModalHandler"></div>
                <div 
                    id="modal-box" 
                    class="z-50
                    w-full mx-auto 
                    bg-secondary dark:bg-secondary-dark 
                    m-2 p-2">
                    <div 
                        id="box-ctrl" 
                        class="flex justify-end">
                        <BtnIcon :icon="CloseIcon" :clickHandler="appStore.toggleAppModalHandler" />
                    </div>
                    <div id="box-header">
                        <h1 class="text-5xl text-primary dark:text-primary-dark capitalize font-popp font-bold ">
                            <slot name="header"></slot>
                        </h1>
                    </div>
                    <div id="box-content" class="mt-14 mb-4">
                        <slot name="content"></slot>
                    </div>
                </div>            
            </div>
        </Transition>
    </Teleport>
</template>
<style scoped lang="scss">
    .modal-in-out-enter-active, .modal-in-out-leave-active {
        transition: opacity 0.2s linear;
    }
    .modal-in-out-enter-from, .modal-in-out-leave-to {
        opacity: 0;
    }
    .modal-in-out-enter-to, .modal-in-out-leave-from {
        opacity: 1;
    }
    #app-modal {

        #modal-box {
            max-width: 37.5rem;

            #box-header {
                @include withRtl('padding', 0 0 0 1rem, 0 1rem 0 0);
            }
        }
    }
</style>