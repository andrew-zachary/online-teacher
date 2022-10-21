<script setup>
import Btn from '../layout/btn.vue';
import Translate from './translate.vue';
</script>
<template>
    <vee-form>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="name">
                <Translate to-translate="account.forms.register.name" />
            </label>
            <vee-field name="name" type="text" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="email">
                <Translate to-translate="account.forms.register.email" />
            </label>
            <vee-field name="email" type="email" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="password">
                <Translate to-translate="account.forms.register.password" />
            </label>
            <vee-field name="password" type="password" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="confirm_password">
                <Translate to-translate="account.forms.register.confirm_password" />
            </label>
            <vee-field name="confirm_password" type="password" class="mt-4 p-4 font-popp"></vee-field>
        </div>
        <div id="login-ctrl" class="w-full mt-8 flex justify-end">
            <Btn text="account.forms.register.btn" />
        </div>
    </vee-form>
</template>
<style></style>