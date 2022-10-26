<script setup>
import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

import Translate from '../components/translate.vue';

const id = "posts";
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                posts
            </template>
            <template #content>
                all posts
            </template>
        </Scroller>
    </View>
</template>
<style></style>