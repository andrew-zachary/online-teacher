<script setup>
import AppView from '../layout/app-view.vue';

const id = 'home';
</script>

<template>
  <AppView :id="id">
    <template #header>
      home page
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        building ...
      </p>
    </template>
  </AppView>
</template>

<style>

</style>