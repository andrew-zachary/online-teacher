<script setup>
import AppView from '../layout/app-view.vue';

const id = 'about';
</script>

<template>
  <AppView :id="id">
    <template #header>
      about page
    </template>
    <template #content>
      <p class="text-3xl font-mont font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit tempore quae facilis vitae tenetur!
      </p>
    </template>
  </AppView>
</template>

<style></style>