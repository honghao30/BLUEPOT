export default [
    // 브랜드 개설
    {
        path: "/Automation",
        name: "Automation",
        component: () => import('@/views/settlement/Automation.vue')
    },
    {
        path: "/ConnectionManagement",
        name: "ConnectionManagement",
        component: () => import('@/views/settlement/ConnectionManagement.vue')
    },    
    {
        path: "/WriteStatement",
        name: "WriteStatement",
        component: () => import('@/views/settlement/WriteStatement.vue')
    },
    {
        path: "/SearchStatement",
        name: "SearchStatement",
        component: () => import('@/views/settlement/SearchStatement.vue')
    },
    {
        path: "/taxBillSummary",
        name: "taxBillSummary",
        component: () => import('@/views/settlement/taxBillSummary.vue')
    }    
  ]