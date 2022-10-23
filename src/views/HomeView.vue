<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';
import ViewScroller from '../components/view-scroller.vue';

const id = 'home';
</script>

<template>
  <View :id="id">
    <ViewScroller>
      <template #content>
        <h1 class="text-8xl text-center dark:text-amber-50 font-popp font-bold capitalize">
          <Translate toTranslate="home.title" />
        </h1>
        <p class="mt-8 text-4xl text-center font-popp font-normal capitalize">
          <Translate toTranslate="home.para" /> ...
        </p>
      </template>
    </ViewScroller>
  </View>
</template>

<style></style>