<script setup>
import { useAppStore } from '../stores/app';

import { useTranslate } from '../composables/useTranslate';

import Modal from '../layout/modal.vue';
import Btn from '../layout/btn.vue';

const appStore = useAppStore();
const { doTranslate } = useTranslate();
</script>
<template>
    <Modal :toggler="appStore.toggleNotificationModal.open" :toggler-click-handler="() => appStore.toggleNotificationModalHandler({open:false})">
        <template #header>
            {{ doTranslate( appStore.toggleNotificationModal.header ) }}
        </template>
        <template #content>
            <p class="text-4xl font-mont font-bold text-center">
                {{ doTranslate( appStore.toggleNotificationModal.msg ) }}
            </p>
            <div class="save-row mt-12 flex justify-end">
                <Btn text="modal.btns.ok" @click="() => appStore.toggleNotificationModalHandler({open:false})" />
            </div>
        </template>
    </Modal>
</template>
<style lang="scss">
    #box-content {

        .save-row {
            @include withRtl('padding', 0 1rem 0 0, 0 0 0 1rem);
        }
    }
</style>