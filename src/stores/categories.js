import { ref } from 'vue';
import { defineStore } from 'pinia';

import { apiCall } from '../includes/helpers';

const initCategories = {
    items: []
};

export const useCategoriesStore = defineStore('categories', () => {

    const cats = ref({...initCategories});

    const getAllCategories = async () => {
        await apiCall({
            method: 'get',
            path: 'ot/cats',
            success: categoriesReceived
        });
    };

    const categoriesReceived = (data) => {
        cats.value.items = data;
    };

    return {
        cats,
        getAllCategories
    };
});