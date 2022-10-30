import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';

const initCategories = {
    items: []
};

export const useCategoriesStore = defineStore('categories', () => {

    const cats = ref({...initCategories});

    const getAllCategories = async () => {
        try {
            const res = await axiosClient.get(`ot/cats`);
            categoriesReceived(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const categoriesReceived = (data) => {
        cats.value.items = data;
    };

    return {
        cats,
        getAllCategories
    };
});