import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';

export const useLessonsStore = defineStore('lessons', () => {
    const lessons = ref([]);
    const noMoreLessons = ref(false);
    const fetchingLessons = ref(false);

    const getLessons = async (page, limit) => {
        fetchingLessons.value = true;

        const res = await axiosClient.get(`/ot/articles/?page=${page}&limit=${limit}`);
        storeLessons(res.data);

        fetchingLessons.value = false;
    };

    const createLesson = async (values) => {
        try {
            await axiosClient.post(`/ot/articles`, {...values});
            lessons.value = [];
            noMoreLessons.value = false;
        } catch (err) {
            console.log(err);
        }
    }

    const storeLessons = (data) => {
        if(data.length === 0) {
            noMoreLessons.value = true;
        } else {
            lessons.value = lessons.value.concat(data);
        }
    }

    return { lessons, noMoreLessons, fetchingLessons, getLessons, createLesson };
});