<script setup>
import {storeToRefs} from 'pinia';
import {useCounterStore} from '../stores/counter';

const store = useCounterStore();

// extract state/getters
const {count} = storeToRefs(store);
// extract actions
const {increment} = store;

</script>

<template>
  <div id="home">
    <h1 class="text-4xl">This is a home page {{count}}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<style>
</style>