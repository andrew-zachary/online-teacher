<script setup>
import { RouterView } from 'vue-router';

import Nav from './layout/nav.vue';
import Footer from './layout/footer.vue';
import PageLoader from './layout/page-loader.vue';

import Profile from './components/profile.vue';
</script>

<template>
  <div id="app-container" class="w-full relative">
    <Profile />
    <PageLoader />
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
    <Footer />
  </div>
</template>

<style></style>
