<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';

const id = 'home';
</script>

<template>
  <View :id="id">
    <template #header>
      <Translate toTranslate="home.title" />
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        <Translate toTranslate="home.para" /> ...
      </p>
    </template>
  </View>
</template>

<style>

</style>