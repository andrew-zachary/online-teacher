<script setup>
import { RouterView } from 'vue-router';

import Footer from './layout/footer.vue';

import PageLoader from './components/page-loader.vue';
import NavSwitch from './components/nav-switch.vue';
import NotificationModal from './components/notification-modal.vue';
import ConfirmationModal from './components/confirmation-modal.vue';
import logoutBtn from './components/logout-btn.vue';

import AuthedNav from './layout/authed-nav.vue';
import Nav from './layout/nav.vue';
</script>

<template>
  <PageLoader />
  <NotificationModal />
  <ConfirmationModal />
  <div id="app-container" class="h-full">
    <header>
      <NavSwitch>
        <template #authed="{openMenu, openMenuHandler}">
          <AuthedNav :openMenu="openMenu" @openMenuToggle="openMenuHandler" />
          <logoutBtn />
        </template>
        <template #unAuthed="{openMenu, openMenuHandler}">
          <Nav :openMenu="openMenu" @openMenuToggle="openMenuHandler" />
        </template>
      </NavSwitch>
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
