<script setup>
import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

const id = "new-lesson"
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                new lesson
            </template>
            <template #content>
                new lesson
            </template>
        </Scroller>
    </View>
</template>
<style></style>