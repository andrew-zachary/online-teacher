<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';

let scrollerObj = null;

const emit = defineEmits(['atBottom']);
const scroller = ref(null);
const scrollingHandler = (e) => {
    if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) + 150) > Math.floor(e.target.scrollHeight)) {
        emit('atBottom');
    }
};

onMounted(() => {
    scrollerObj = new SimpleBar(scroller.value);
    scrollerObj.getScrollElement().addEventListener('scroll', scrollingHandler);
});

onBeforeUnmount(() => {
    scrollerObj.getScrollElement().removeEventListener('scroll', scrollingHandler);
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
<style></style>