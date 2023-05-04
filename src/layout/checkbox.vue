<script setup>
const {onChangeHandler, checked} = defineProps(['onChangeHandler', 'checked']);
</script>
<template>
    <label class="checkbox-wrapper">
        <input type="checkbox" @change="onChangeHandler" :checked="checked">
        <span class="checkmark-box"></span>
    </label>
</template>
<style scoped lang="scss">
    .checkbox-wrapper {
        display: block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .checkmark-box {
            position: absolute;
            top: 50%;
            left: 50%;
            @include withRtl('transform', translate(-100%, -50%), translate(0, -50%));
            height: 2.5rem;
            width: 2.5rem;
            border: 0.2rem solid;
            @apply border-primary dark:border-primary-dark;

            &:after {
                content: "";
                position: absolute;
                display: none;
                left: 0.7rem;
                top: 0.2rem;
                width: 0.8rem;
                height: 1.4rem;
                border: solid;
                @apply border-primary dark:border-primary-dark;
                border-width: 0 0.3rem 0.3rem 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

            &:checked ~ .checkmark-box {
                @apply bg-secondary dark:bg-secondary-dark;
            }

            &:checked ~ .checkmark-box:after {
                display: block;
            }
        }
    }
</style>