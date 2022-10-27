import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';

import { useAppStore } from './app';

export const useUserStore = defineStore('user', () => {
    const appStore = useAppStore();

    const isAuthed = ref(false);
    const profileData = reactive({
        _id: null
    })

    const getProfile = async() => {
        appStore.togglePageLoaderHandler();

        try {
            const res = await axiosClient.get('/ot/users/profile');
            profileData._id = res.data._id;
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }

        appStore.togglePageLoaderHandler();
    };

    const logout = async() => {
        appStore.togglePageLoaderHandler();

        try {
            await axiosClient.get('auth/signout');
            profileData._id = null;
            isAuthed.value = false;
        } catch (err) {
            console.log(err.response.data);
        }

        appStore.togglePageLoaderHandler();
    }

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

    return { isAuthed, login, register, getProfile, logout };
});