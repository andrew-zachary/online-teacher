<script setup>
import {useAppStore} from '../stores/app';
const appStore = useAppStore();
</script>
<template>
    <Teleport to="body">
        <div 
            v-if="appStore.togglePageLoader" 
            id="page-loader" 
            class="absolute top-0 bottom-0 left-0 right-0 
            bg-green-800
            z-50
            flex flex-col items-center justify-center">
            <h1 class="text-6xl text-amber-50">please wait</h1>
            <div id="loader" className="mt-8">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<style lang="scss">
.spinner {
    margin: 1.5rem auto;
    height:4rem;
    width: 7rem;
    text-align: center;
    & > div {
        width: 1.8rem;
        height: 1.8rem;
        background-color: rgb(255, 251, 235);
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }
    .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
}
@-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
}
@keyframes sk-bouncedelay {
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    } 40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}
</style>