<script setup>
import BtnIcon from './btn-icon.vue';
import CloseIcon from '../assets/close.svg';

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
                v-if="appStore.toggleModal">
                <div id="modal-drop-bg" class="absolute top-0 bottom-0 left-0 right-0" @click="appStore.toggleModalHandler"></div>
                <div id="modal-box" class="bg-secondary m-2 p-2">
                    <div id="box-ctrl" class="flex justify-end">
                        <BtnIcon :icon="CloseIcon" :clickHandler="appStore.toggleModalHandler" />
                    </div>
                    <div id="box-header">
                        <h1 class="text-5xl capitalize font-pop font-bold text-primary">
                            <slot name="header"></slot>
                        </h1>
                    </div>
                    <div id="box-content" class="mt-12 mb-4">
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
            z-index: 1;
        }

        #modal-drop-bg{
            background-color: #064e3be6;
            z-index: 0;
        }
    }
</style>