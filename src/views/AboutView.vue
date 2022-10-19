<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';

const id = 'about';
</script>

<template>
  <View :id="id">
    <template #header>
      <Translate toTranslate="about.title" />
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        <Translate toTranslate="about.para" />
      </p>
    </template>
  </View>
</template>

<style></style>