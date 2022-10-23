import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';

export const useUserStore = defineStore('user', () => {
    const isAuthed = ref(false);

    const getProfile = async() => {
        try {
            await axiosClient.get('/ot/users/profile');
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const register = async ({firstName, lastName, email, password}) => {
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
    };

    const login = async ({email, password}) => {
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
    };

    return { isAuthed, login, register, getProfile };
});