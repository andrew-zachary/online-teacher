<script setup>
import { RouterView } from 'vue-router';

import Footer from './layout/footer.vue';

import PageLoader from './components/page-loader.vue';
import Profile from './components/profile.vue';
import NavSwitch from './components/nav-switch.vue';
import NotificationModal from './components/notification-modal.vue';
import ConfirmationModal from './components/confirmation-modal.vue';
</script>

<template>
  <Profile />
  <PageLoader />
  <NotificationModal />
  <ConfirmationModal />
  <div id="app-container" class="h-full">
    <header>
      <NavSwitch />
    </header>
    <main>
      <RouterView v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <Component :is="Component"></Component>
        </transition>
      </RouterView>
    </main>
  </div>
  <Footer />
</template>

<style lang="scss">
  #app-container {
    display: grid;
    grid-template-rows: max-content minmax(0, 1fr);
  }
</style>
