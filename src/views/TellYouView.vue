<script setup>
import View from '../layout/view.vue';

import Scroller from '../components/scroller.vue';
import Translate from '../components/translate.vue';

const id = 'tell-you';
</script>

<template>
  <View :id="id">
    <Scroller>
      <template #header>
        <Translate toTranslate="tell_you.title" />
      </template>
      <template #content>
        <p class="text-3xl font-mont font-normal">
          <Translate toTranslate="tell_you.para" />
        </p>
      </template>
    </Scroller>
  </View>
</template>

<style lang="scss">
  #tell-you {
    
    p {
      line-height: 2.6rem;
      @include withRtl(padding, 0 0 0 0.4rem, 0 0.4rem 0 0);
    }
  }
</style>