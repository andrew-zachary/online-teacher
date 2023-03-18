<script setup>
import View from '../layout/view.vue';

import { useTranslate } from '../composables/useTranslate';

const id = 'tell-you';
const { doTranslate } = useTranslate();
</script>

<template>
  <View :id="id" class="flex flex-col justify-center">
    <h1 class="mb-14 text-6xl font-bold font-popp text-primary dark:text-primary-dark capitalize">
      {{ doTranslate( "tell_you.title" ) }}
    </h1>
    <p class="text-3xl font-mont font-normal">
      {{ doTranslate( "tell_you.para" ) }}
    </p>
  </View>
</template>

<style lang="scss">
  #tell-you {
    margin-top: calc(-125.7px / 2);
    @include withRtl(padding, 1rem 0 0 0.4rem, 1rem 0.4rem 0 0);
    
    p {
      line-height: 2.6rem;
    }
  }
</style>