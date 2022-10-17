<script setup>
import { RouterView } from 'vue-router';

import Nav from './layout/nav.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div id="app-container" class="w-full relative">
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

<style lang="scss">
  #app-container {

    footer {
      @include withRtl('padding', 2rem 2rem 2rem 0rem, 2rem 0rem 2rem 2rem);
  
      img {
        width: 4rem;
      }
    }
  }
</style>
