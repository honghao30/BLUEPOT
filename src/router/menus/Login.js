export default [
    {
        path: "/",
        name: "Login",
        component: () => import('@/views/main/index.vue'),
        meta: {
            onlyBody: true
        }
    }
]