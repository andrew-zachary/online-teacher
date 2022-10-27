import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';
import { useAppStore } from './app';

export const useLessonsStore = defineStore('lessons', () => {
    const lessons = ref([]);
    const myLessons = ref([]);
    const noMoreLessons = ref(false);
    const noMoreMyLessons = ref(false);
    const fetchingLessons = ref(false);
    const appStore = useAppStore();

    const deletePost = async (id) => {
        appStore.togglePageLoaderHandler();

        const res = await axiosClient.delete(`ot/articles/${id}`);
        postDeleted(res.data);

        appStore.togglePageLoaderHandler();
    };

    const getMyLessons = async (page, limit) => {
        fetchingLessons.value = true;

        const res = await axiosClient.get(`/ot/articles/collections/?page=${page}&limit=${limit}`);
        myLessonsReceived(res.data);

        fetchingLessons.value = false;
    };

    const getLessons = async (page, limit) => {
        fetchingLessons.value = true;

        const res = await axiosClient.get(`/ot/articles/?page=${page}&limit=${limit}`);
        lessonsReceived(res.data);

        fetchingLessons.value = false;
    };

    const createLesson = async (values) => {
        try {
            await axiosClient.post(`/ot/articles`, {...values});
            lessonCreated();
        } catch (err) {
            console.log(err);
        }
    }

    const postDeleted = (data) => {
        lessons.value = lessons.value.filter(lesson => lesson._id !== data._id);
        myLessons.value = myLessons.value.filter(lesson => lesson._id !== data._id);
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.delete_post.success.title',
            msg: 'modal.delete_post.success.msg.successfully'
        });
    }

    const lessonCreated = () => {
        lessons.value = [];
        myLessons.value = [];
        noMoreLessons.value = false;
        noMoreMyLessons.value = false;
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.lesson_created.success.title',
            msg: 'modal.lesson_created.success.msg.successfully'
        });
    };

    const myLessonsReceived = (data) => {
        if(data.length === 0) {
            noMoreMyLessons.value = true;
        } else {
            myLessons.value = myLessons.value.concat(data);
        }
    }

    const lessonsReceived = (data) => {
        if(data.length === 0) {
            noMoreLessons.value = true;
        } else {
            lessons.value = lessons.value.concat(data);
        }
    }

    return { 
        lessons,
        myLessons,
        noMoreLessons,
        noMoreMyLessons,
        fetchingLessons, 
        getLessons, 
        createLesson, 
        getMyLessons,
        deletePost
    };
});