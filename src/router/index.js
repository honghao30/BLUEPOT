import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/errors/404.vue'
// 파일 링크
import Login from './menus/Login'
import Main from './menus/Main'
import Settlement from './menus/Settlement'
// import PubGuides from './menus/pubGuide'

// 라우터 
const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },   
    ...Login,
    ...Main,
    ...Settlement  
]
// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to) => {

})

// 라우터 추출 (main.js에서 import)
export {router}