<script setup>
import { useAppStore } from '../stores/app';

import { useTranslate } from '../composables/useTranslate';

import Modal from '../layout/modal.vue';
import Btn from '../layout/btn.vue';

const { doTranslate } = useTranslate();
const appStore = useAppStore();
const confirmAction = () => {
    appStore.toggleConfirmationModal.to_confirm();
    appStore.toggleConfirmationModalHandler({open:false});
};
</script>
<template>
    <Modal :toggler="appStore.toggleConfirmationModal.open" :toggler-click-handler="() => appStore.toggleConfirmationModalHandler({open:false})">
        <template #header>
            {{ doTranslate(appStore.toggleConfirmationModal.header) }}
        </template>
        <template #content>
            <p class="text-4xl font-mont font-bold text-center">
                {{ doTranslate(appStore.toggleConfirmationModal.msg) }}
            </p>
            <div class="save-row mt-12 flex justify-around">
                <Btn text="modal.btns.cancel" @click="() => appStore.toggleConfirmationModalHandler({open:false})" />
                <Btn text="modal.btns.ok" @click="confirmAction" />
            </div>
        </template>
    </Modal>
</template>
<style></style>