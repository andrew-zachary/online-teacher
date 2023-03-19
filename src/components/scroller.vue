<script setup>
import { ref } from 'vue';

import { useSimpleBar } from '../composables/useSimpleBar';

const scroller = ref(null);
useSimpleBar({elementRef: scroller});

</script>
<template>
    <div ref="scroller" id="section-scroller">
        <slot name="nav-btns"></slot>
        <header>
            <h1 class="mb-8 text-6xl font-bold font-popp text-primary dark:text-primary-dark capitalize">
                <slot name="header"></slot>
            </h1>
        </header>
        <slot name="content"></slot>
    </div>
</template>
<style lang="scss">
    #section-scroller {
        h1 {
            line-height: 5rem;
        }
    }
</style>