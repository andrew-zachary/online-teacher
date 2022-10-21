<script></script>
<template>
  <section>
    <slot></slot>
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
    max-height: calc(100vh - 10rem);
  }
</style>