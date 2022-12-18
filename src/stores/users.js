import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import { apiCall } from '../includes/helpers';

import { useAppStore } from './app';

export const useUserStore = defineStore('user', () => {
    const appStore = useAppStore();
    const router = useRouter();

    const isAuthed = ref(false);
    const profileData = reactive({
        _id: null,
        name: null,
        email: null
    });

    const getProfile = async() => {
        await apiCall({
            method: 'get',
            path: '/ot/users/profile',
            success: profileReceived,
            loading: appStore.togglePageLoaderHandler
        })
    };

    const logout = async() => {
        await apiCall({
            method: 'get',
            path: 'auth/signout',
            success: loggedout,
            loading: appStore.togglePageLoaderHandler
        });
    }

    const register = async ({firstName, lastName, email, password}) => {
        await apiCall({
            method: 'post',
            path: 'auth/signup',
            body: {
                firstName,
                lastName,
                email,
                password
            },
            success: registered,
            fail: {
                header: 'modal.headers.error',
                msg: {
                    'email_already_taken': 'modal.register.errors.email_already_taken'
                },
                handler: appStore.toggleNotificationModalHandler
            },
            loading: appStore.togglePageLoaderHandler
        });
    };

    const login = async ({email, password}) => {
        await apiCall({
            method: 'post',
            path: 'auth/signin',
            body: {
                email,
                password
            },
            success: loggedin,
            fail: {
                header: 'modal.headers.error',
                msg: {
                    'wrong_email_password': 'modal.login.errors.wrong_email_password'
                },
                handler: appStore.toggleNotificationModalHandler
            },
            loading: appStore.togglePageLoaderHandler
        })
    };

    const profileReceived = (data) => {
        profileData._id = data._id;
        profileData.name = data.authId.firstName + ' ' + data.authId.lastName;
        profileData.email = data.authId.email;
        isAuthed.value = true;
    }

    const loggedout = () => {
        profileData._id = null;
        profileData.name = null;
        profileData.email = null;
        isAuthed.value = false;
    }

    const registered = () => {
        isAuthed.value = true;
        router.push({name: 'links'});
    }

    const loggedin = () => {
        isAuthed.value = true;
        router.push({name: 'links'});
    }

    return { isAuthed, login, register, getProfile, logout, profileData };
});