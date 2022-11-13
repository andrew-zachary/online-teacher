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
<style></style>