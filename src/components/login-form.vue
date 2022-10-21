<script setup>
import Btn from '../layout/btn.vue';
import Translate from './translate.vue';
</script>
<template>
    <vee-form>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="email">
                <Translate to-translate="account.forms.login.email" />
            </label>
            <vee-field name="email" type="text" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="password">
                <Translate to-translate="account.forms.login.password" />
            </label>
            <vee-field name="password" type="password" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn text="account.forms.login.btn" />
        </div>
    </vee-form>
</template>
<style></style>