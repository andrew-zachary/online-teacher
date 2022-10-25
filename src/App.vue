<script setup>
import { RouterView } from 'vue-router';

import Footer from './layout/footer.vue';

import PageLoader from './components/page-loader.vue';
import Profile from './components/profile.vue';
import NavSwitch from './components/nav-switch.vue';
</script>

<template>
  <div id="app-container" class="w-full relative">
    <Profile />
    <PageLoader />
    <header>
      <NavSwitch />
    </header>
    <main>
      <RouterView v-slot="{Component}">
        <transition name="height-adapt" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style></style>
