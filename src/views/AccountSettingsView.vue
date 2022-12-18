<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';

const id = "accoutn-settings";
</script>
<template>
    <View :id="id">
        <Scroller>
            <template #header>
                <Translate toTranslate="account_settings.title" />
            </template>
            <template #content>

            </template>
        </Scroller>
    </View>
</template>
<style></style>