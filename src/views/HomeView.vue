<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';

const id = 'home';
</script>

<template>
  <View :id="id" class="flex flex-col justify-center">
    <h1 class="text-8xl text-center dark:text-amber-50 font-popp font-bold capitalize">
      <Translate toTranslate="home.title" />
    </h1>
    <p class="mt-8 text-4xl text-center font-popp font-normal capitalize">
      <Translate toTranslate="home.para" /> ...
    </p>
  </View>
</template>

<style lang="scss">
  #home {
    margin-top: calc(-125.7px / 2);
  }
</style>