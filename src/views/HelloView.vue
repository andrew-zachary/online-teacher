<script setup>
import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

const id = "hello"
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                hello
            </template>
            <template #content>
                hello
            </template>
        </Scroller>
    </View>
</template>
<style></style>