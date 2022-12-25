<template>
  <section class="w-full">
    <slot></slot>
  </section>
</template>

<style lang="scss">
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s ease-out;
  }
  .fade-leave-active {
    transition: all 0.3s ease-out;
  }
  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }
</style>