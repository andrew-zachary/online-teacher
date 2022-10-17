<script setup>
import { RouterView } from 'vue-router';

import Nav from './layout/nav.vue';
</script>

<template>
  <div id="app-container" class="w-full">
    <header>
      <Nav />
    </header>
    <main>
      <RouterView v-slot="{Component}">
        <transition name="height-adapt" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style></style>
