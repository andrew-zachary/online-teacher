<script setup>
import View from '../layout/view.vue';

import Translate from '../components/translate.vue';
import ViewScroller from '../components/view-scroller.vue';

const id = 'tell-you';
</script>

<template>
  <View :id="id">
    <ViewScroller>
      <template #header>
        <Translate toTranslate="tell_you.title" />
      </template>
      <template #content>
        <p class="text-3xl font-mont font-normal">
          <Translate toTranslate="tell_you.para" />
        </p>
      </template>
    </ViewScroller>
  </View>
</template>

<style lang="scss">
  #tell-you {
    
    p {
      line-height: 2.6rem;
    }
  }
</style>