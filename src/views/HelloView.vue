<script setup>
import View from '../layout/view.vue';
import Scroller from '../layout/scroller.vue';

import Translate from '../components/translate.vue';

const id = "hello"
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="hello.title" />
            </template>
            <template #content>
                <p class="mt-8 text-4xl font-popp font-normal capitalize">
                    account settings ...
                </p>
            </template>
        </Scroller>
    </View>
</template>
<style></style>