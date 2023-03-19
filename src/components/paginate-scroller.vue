<script setup>
import { ref } from 'vue';

import { useSimpleBar } from '../composables/useSimpleBar';

const emit = defineEmits(['atBottom']);
const scroller = ref(null);
const scrollingHandler = (e) => {
    if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) + 150) > Math.floor(e.target.scrollHeight)) {
        emit('atBottom');
    }
};
useSimpleBar({elementRef: scroller, onScrollEvent:scrollingHandler});

</script>
<template>
    <div ref="scroller" id="section-scroller">
        <header>
            <h1 class="mb-14 text-6xl font-bold font-popp text-primary dark:text-primary-dark capitalize">
                <slot name="header"></slot>
            </h1>
        </header>
        <slot name="content"></slot>
    </div>
</template>
<style></style>