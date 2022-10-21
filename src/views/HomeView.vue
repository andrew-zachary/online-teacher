<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';
import ViewScroller from '../components/view-scroller.vue';

const id = 'home';
</script>

<template>
  <View :id="id">
    <ViewScroller>
      <template #header>
        <Translate toTranslate="home.title" />
      </template>
      <template #content>
        <p class="text-3xl font-mont font-normal">
          <Translate toTranslate="home.para" /> ...
        </p>
      </template>
    </ViewScroller>
  </View>
</template>

<style>

</style>