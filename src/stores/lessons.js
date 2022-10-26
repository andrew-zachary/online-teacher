import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';
import { useAppStore } from './app';

export const useLessonsStore = defineStore('lessons', () => {
    const lessons = ref([]);
    const noMoreLessons = ref(false);
    const fetchingLessons = ref(false);
    const appStore = useAppStore();

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

    const lessonCreated = () => {
        lessons.value = [];
        noMoreLessons.value = false;
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.lesson_created.success.title',
            msg: 'modal.lesson_created.success.msg.successfully'
        });
    };

    const lessonsReceived = (data) => {
        if(data.length === 0) {
            noMoreLessons.value = true;
        } else {
            lessons.value = lessons.value.concat(data);
        }
    }

    return { lessons, noMoreLessons, fetchingLessons, getLessons, createLesson };
});