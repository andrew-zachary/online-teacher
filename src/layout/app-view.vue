<script setup></script>

<template>
  <section data-simplebar data-simplebar-auto-hide="false">
    <header>
      <h1 class="mb-8 text-6xl font-bold font-popp text-primary capitalize">
        <slot name="header"></slot>
      </h1>
    </header>
    <slot name="content"></slot>
  </section>
</template>

<style lang="scss">
  .height-adapt-enter-from, .height-adapt-leave-to {
    opacity: 0;
    max-height: 0;
  }
  .height-adapt-enter-active {
    transition: all 0.5s ease-out;
  }
  .height-adapt-leave-active {
    transition: all 0.3s ease-out;
  }
  .height-adapt-enter-to, .height-adapt-leave-from {
    opacity: 1;
    max-height: calc(100vh - 8.25rem);
  }
  section {
    max-height: calc(100vh - 8.25rem);
    overflow-y: auto;
    opacity: 1;
    width: 100%;

    @include withRtl('padding', 0 0 8rem 1rem, 0 1rem 8rem 0);

    .simplebar-scrollbar::before {
      background-color: $primary;
      opacity: 1!important;
      width: 0.4rem!important;
    }
  }
</style>