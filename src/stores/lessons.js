import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useLessonsStore = defineStore('lessons', () => {
    const lessons = ref([]);
    const noMoreLessons = ref(false);

    const getLessons = async (page, limit) => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/ot/articles/?page=${page}&limit=${limit}`);
        storeLessons(res.data);
    };

    const storeLessons = (data) => {
        if(data.length === 0) {
            noMoreLessons.value = true;
        } else {
            lessons.value = lessons.value.concat(data);
        }
    }

    return { lessons, noMoreLessons, getLessons };
});