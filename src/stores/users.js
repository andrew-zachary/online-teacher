import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import { apiCall, calcAppPrefs } from '../includes/helpers';

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

    const update_preferences = async (newSettings) => {
        await apiCall({
            method: 'put',
            path: '/ot/users/profile/app',
            body: {
                mode: newSettings.darkModeChecked ? 'dark' : 'light',
                lang: newSettings.lang.locale
            },
            success: preferences_updated,
            loading: appStore.togglePageLoaderHandler
        });
    };

    const send_forgot_password_mail = async ({email}) => {
        await apiCall({
            method: 'post',
            path: '/auth/forgot-password',
            body: { email },
            success: forgot_password_mail_sent,
            fail: {
                header: 'modal.headers.error',
                msg: {
                    'no_user_exist': 'modal.forgot_password.errors.no_user_exist'
                },
                handler: appStore.toggleNotificationModalHandler
            },
            loading: appStore.togglePageLoaderHandler
        });
    };

    const reset_password = async ({params:{email, expTimestamp, token}, body:{newPassword}}) => {
        await apiCall({
            method: 'post',
            path: '/auth/reset-password',
            params: { email, expTimestamp, token },
            body: { newPassword },
            success: password_was_reset,
            loading: appStore.togglePageLoaderHandler
        });
    };

    const password_was_reset = async () => {
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.reset_password.success.title',
            msg: 'modal.reset_password.success.body'
        });
    }

    const preferences_updated = async (data) => {
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.preferences_updated.success.title',
            msg: 'modal.preferences_updated.success.body'
        });
        appStore.updateAppSettings(calcAppPrefs(data));
    };

    const forgot_password_mail_sent = async () => {
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.forgot_password.success.title',
            msg: 'modal.forgot_password.success.body'
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
        appStore.updateAppSettings(calcAppPrefs(data.appPreferences));
    };

    const loggedout = () => {
        profileData._id = null;
        profileData.name = null;
        profileData.email = null;
        isAuthed.value = false;
        router.push({name: 'home'});
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
        appStore.updateAppSettings(calcAppPrefs(data.appPreferences));
        router.push({name: 'links'});
    };

    return {
        isAuthed, 
        login, 
        register, 
        getProfile, 
        logout, 
        profileData, 
        changePassword, 
        sendVerificationMail, 
        verifyEmail, 
        update_preferences,
        send_forgot_password_mail,
        reset_password
    };
});