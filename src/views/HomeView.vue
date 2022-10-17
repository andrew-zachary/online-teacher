<script setup>
import AppView from '../layout/app-view.vue';
import Btn from '../layout/btn.vue';

import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();

// extract state/getters
const { count } = storeToRefs(store);
// extract actions
const { increment } = store;

const id = 'home';

</script>

<template>
  <AppView :id="id">
    <template #header>
      count {{count}}
    </template>
    <template #content>
      <Btn :clickHandler="increment" />
      <ul class="mt-4">
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
        <li class="text-4xl">test 1</li>
      </ul>
    </template>
  </AppView>
</template>

<style>

</style>