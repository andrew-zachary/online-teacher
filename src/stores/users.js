import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import { apiCall } from '../includes/helpers';

import { useAppStore } from './app';

export const useUserStore = defineStore('user', () => {
    const appStore = useAppStore();
    const router = useRouter();

    const isAuthed = ref(null);
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
        });
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

    const changePassword = async ({oldPassword, newPassword}) => {
        await apiCall({
            method: 'post',
            path: 'auth/change-password',
            body: {
                oldPassword,
                newPassword
            },
            success: passwordChanged,
            fail: {
                header: 'modal.headers.error',
                msg: {
                    'wrong_password': 'modal.change_password.errors.wrong_password'
                },
                handler: appStore.toggleNotificationModalHandler
            },
            loading: appStore.togglePageLoaderHandler
        });
    };

    const sendVerificationMail = async () => {
        await apiCall({
            method: 'get',
            path: 'auth/verify-email',
            success: verificationMailSent,
            loading: appStore.togglePageLoaderHandler
        });
    };

    const verifyEmail = async (email, token) => {
        await apiCall({
            method: 'get',
            path: 'auth/verify-email',
            params: {email, token},
            success: emailVerified,
            fail: {
                header: 'modal.headers.error',
                msg: {
                    'email_already_verified': 'modal.email_verification.errors.email_already_verified'
                },
                handler: appStore.toggleNotificationModalHandler
            },
            loading: appStore.togglePageLoaderHandler
        });
    };

    const emailVerified = () => {
        profileData.email.verified = true;
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.email_verification.success.title',
            msg: 'modal.email_verification.success.body'
        });
    };

    const verificationMailSent = () => {
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.verification_mail_sent.success.title',
            msg: 'modal.verification_mail_sent.success.body'
        });
    };

    const passwordChanged = () => {
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.change_password.success.title',
            msg: 'modal.change_password.success.body'
        });
    };

    const profileReceived = (data) => {
        profileData._id = data._id;
        profileData.name = data.authId.firstName + ' ' + data.authId.lastName;
        profileData.email = data.authId.email;
        isAuthed.value = true;
    };

    const loggedout = () => {
        profileData._id = null;
        profileData.name = null;
        profileData.email = null;
        isAuthed.value = false;
    };

    const registered = (data) => {
        profileData._id = data._id;
        profileData.name = data.authId.firstName + ' ' + data.authId.lastName;
        profileData.email = data.authId.email;
        isAuthed.value = true;
        router.push({name: 'links'});
    };

    const loggedin = (data) => {
        profileData._id = data._id;
        profileData.name = data.authId.firstName + ' ' + data.authId.lastName;
        profileData.email = data.authId.email;
        isAuthed.value = true;
        router.push({name: 'links'});
    };

    return { isAuthed, login, register, getProfile, logout, profileData, changePassword, sendVerificationMail, verifyEmail };
});