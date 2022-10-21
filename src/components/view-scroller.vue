<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';

let mainScroller = null;

const emit = defineEmits(['atBottom']);
const viewScroller = ref(null);
const scrollingHandler = (e) => {
    if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight)) === Math.floor(e.target.scrollHeight)) {
        emit('atBottom');
    }
};

onMounted(() => {
    mainScroller = new SimpleBar(viewScroller.value);
    mainScroller.getScrollElement().addEventListener('scroll', scrollingHandler);
});

onBeforeUnmount(() => {
    mainScroller.getScrollElement().removeEventListener('scroll', scrollingHandler);
    mainScroller.unMount();
});
</script>
<template>
    <div ref="viewScroller" id="section-scroller">
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
        max-height: calc(100vh - 10rem);
        width: 100%;

        @include withRtl('padding', 0 0 10rem 1rem, 0 1rem 10rem 0);
    }
    .simplebar-scrollbar::before {
      background-color: var(--primary)!important;
      opacity: 1!important;
      width: 0.4rem!important;
    }
</style>