import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
    const isAuthed = ref(false);

    const register = async ({firstName, lastName, email, password}) => {
        try {
            await axios.post(`${import.meta.env.VITE_BASE_API_URL}/api/auth/signup`, {
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
            await axios.post(`${import.meta.env.VITE_BASE_API_URL}/api/auth/signin`, {
                email,
                password,
                app_key: import.meta.env.VITE_APP_KEY
            });
            isAuthed.value = true;
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return { isAuthed, login, register };
});