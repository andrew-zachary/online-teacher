<script setup>
import AppView from '../layout/app-view.vue';

import Translate from '../components/translate.vue';

const id = 'about';
</script>

<template>
  <AppView :id="id">
    <template #header>
      <Translate toTranslate="about.title" />
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        <Translate toTranslate="about.para" />
      </p>
    </template>
  </AppView>
</template>

<style></style>