<script setup>
import AppView from '../layout/app-view.vue';
import Btn from '../layout/btn.vue';

const id = 'home';
</script>

<template>
  <AppView :id="id">
    <template #header>
      home page
    </template>
    <template #content>
      building ...
    </template>
  </AppView>
</template>

<style>

</style>