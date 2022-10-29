<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';

let scrollerObj = null;

const scroller = ref(null);

onMounted(() => {
    scrollerObj = new SimpleBar(scroller.value);
});

onBeforeUnmount(() => {
    scrollerObj.unMount();
});
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
<style lang="scss">
    #section-scroller {
        overflow-y: auto;
        opacity: 1;
        max-height: calc(100vh - 12.57rem);
        width: 100%;

        @include withRtl('padding', 0 0 6rem 1rem, 0 1rem 6rem 0);
    }
    div[data-simplebar=init] {
        .simplebar-track.simplebar-vertical {
            @include withRtl(right, 0, unset);
            @include withRtl(left, unset, 0);
        }
    }
    .simplebar-scrollbar::before {
        background-color: var(--quaternary)!important;
        opacity: 1!important;
        width: 0.4rem!important;
    }
</style>