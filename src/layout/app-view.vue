<script setup></script>

<template>
    <section data-simplebar data-simplebar-auto-hide="false">
        <header>
          <h1 class="text-6xl font-bold font-pop text-primary capitalize">
            <slot name="header"></slot>
          </h1>
        </header>
        <slot name="content"></slot>
    </section>
</template>

<style scoped lang="scss">
  .height-adapt-enter-from, .height-adapt-leave-to {
    opacity: 0;
    max-height: 0;
  }
  .height-adapt-enter-active {
    transition: all 0.5s ease-in-out;
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

    @include withRtl('padding', 0 0 0 1rem, 0 1rem 0 0);

    h1 {
      margin-bottom: 1rem;
    }
  }
</style>