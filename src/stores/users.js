import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';

import { useAppStore } from './app';

export const useUserStore = defineStore('user', () => {
    const appStore = useAppStore();

    const isAuthed = ref(false);

    const getProfile = async() => {
        appStore.togglePageLoaderHandler();

        try {
            await axiosClient.get('/ot/users/profile');
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }

        appStore.togglePageLoaderHandler();
    };

    const register = async ({firstName, lastName, email, password}) => {
        appStore.togglePageLoaderHandler();

        try {
            await axiosClient.post('auth/signup', {
                firstName,
                lastName,
                email,
                password,
                app_key: import.meta.env.VITE_APP_KEY
            });
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }

        appStore.togglePageLoaderHandler();
    };

    const login = async ({email, password}) => {
        appStore.togglePageLoaderHandler();

        try {
            await axiosClient.post('auth/signin', {
                email,
                password,
                app_key: import.meta.env.VITE_APP_KEY
            });
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }

        appStore.togglePageLoaderHandler();
    };

    return { isAuthed, login, register, getProfile };
});