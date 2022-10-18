<script setup>
import AppView from '../layout/app-view.vue';

import Translate from '../components/translate.vue';

const id = 'home';
</script>

<template>
  <AppView :id="id">
    <template #header>
      <Translate toTranslate="home.title" />
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        <Translate toTranslate="home.para" /> ...
      </p>
    </template>
  </AppView>
</template>

<style>

</style>