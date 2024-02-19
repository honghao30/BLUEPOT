export default [
    // 브랜드 개설
    {
        path: "/Automation",
        name: "Automation",
        component: () => import('@/views/Settlement/Automation.vue')
    },
    {
        path: "/WriteStatement",
        name: "WriteStatement",
        component: () => import('@/views/Settlement/WriteStatement.vue')
    },
    {
        path: "/SearchStatement",
        name: "SearchStatement",
        component: () => import('@/views/Settlement/SearchStatement.vue')
    }    
  ]