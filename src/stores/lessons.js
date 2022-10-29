import { ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '../includes/axiosClient';
import { useAppStore } from './app';

const initMyPosts = {
    items: [],
    noMore: false,
    next_page: 1,
    limit: 10
}

const initLessons = {
    items: [],
    noMore: false,
    next_page: 1,
    limit: 10
}

const initLesson = {};

export const useLessonsStore = defineStore('lessons', () => {

    const myPosts = ref({...initMyPosts});
    const lessons = ref({...initLessons});
    const lesson = ref(initLesson);
    const fetching = ref(false);

    const appStore = useAppStore();

    const updatePost = async (id, values) => {
        appStore.togglePageLoaderHandler();

        try {
            const res = await axiosClient.put(`ot/articles/${id}`, {...values});
            postUpdated(res.data);
        } catch (err) {
            console.log(err);
        }

        appStore.togglePageLoaderHandler();
    }

    const getLesson = async (id) => {
        appStore.togglePageLoaderHandler();

        try {
            const res = await axiosClient.get(`ot/articles/${id}`);
            lessonReceived(res.data);
        } catch (err) {
            console.log(err);
        }

        appStore.togglePageLoaderHandler();
    }

    const deletePost = async (id) => {
        appStore.togglePageLoaderHandler();

        const res = await axiosClient.delete(`ot/articles/${id}`);
        postDeleted(res.data);

        appStore.togglePageLoaderHandler();
    };

    const getMyPosts = async () => {
        fetching.value = true;

        const res = await axiosClient.get(`/ot/articles/collections/?page=${myPosts.value.next_page}&limit=${myPosts.value.limit}`);
        myPostsReceived(res.data);

        fetching.value = false;
    };

    const getLessons = async () => {
        fetching.value = true;

        const res = await axiosClient.get(`/ot/articles/?page=${lessons.value.next_page}&limit=${lessons.value.limit}`);
        lessonsReceived(res.data);

        fetching.value = false;
    };

    const createLesson = async (values) => {
        appStore.togglePageLoaderHandler();

        try {
            await axiosClient.post(`/ot/articles`, {...values});
            lessonCreated();
        } catch (err) {
            console.log(err);
        }

        appStore.togglePageLoaderHandler();
    }

    const postUpdated = async (data) => {
        lessons.value.items = lessons.value.items.map(lesson => {
            if(lesson._id === data._id) {
                return data;
            } else {
                return lesson;
            }
        });
        myPosts.value.items = myPosts.value.items.map(lesson => {
            if(lesson._id === data._id) {
                return data;
            } else {
                return lesson;
            }
        });
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.update_post.success.title',
            msg: 'modal.update_post.success.msg.successfully'
        });
    }

    const lessonReceived = async (data) => {
        lesson.value = {...data, cat_id: data.catId._id};
    }

    const postDeleted = (data) => {
        lessons.value.items = lessons.value.items.filter(lesson => lesson._id !== data._id);
        myPosts.value.items = myPosts.value.items.filter(lesson => lesson._id !== data._id);
        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.delete_post.success.title',
            msg: 'modal.delete_post.success.msg.successfully'
        });
    }

    const lessonCreated = () => {

        myPosts.value = initMyPosts;
        lessons.value = initLessons;

        appStore.toggleNotificationModalHandler({
            open: true,
            header: 'modal.lesson_created.success.title',
            msg: 'modal.lesson_created.success.msg.successfully'
        });
    };

    const myPostsReceived = (data) => {
        myPosts.value.next_page += 1;
        if(data.length === 0) {
            myPosts.value.noMore = true;
        } else {
            myPosts.value.items = myPosts.value.items.concat(data);
        }
    }

    const lessonsReceived = (data) => {
        lessons.value.next_page += 1;
        if(data.length === 0) {
            lessons.value.noMore = true;
        } else {
            lessons.value.items = lessons.value.items.concat(data);
        }
    }

    return {
        lesson,
        lessons,
        myPosts,
        fetching, 
        getLessons,
        getLesson,
        createLesson, 
        getMyPosts,
        deletePost,
        updatePost
    };
});