<template>
    <button
        type="button"
        class="text-2xl text-secondary capitalize font-mont font-bold
        py-1 px-2 
        rounded-lg
        bg-quaternary dark:bg-quaternary-dark
        inline-block
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed"
    >
        <slot></slot>
    </button>
</template>