export default [
    // 브랜드 개설
    {
        path: "/Automation",
        name: "Automation",
        component: () => import('@/views/setTlement/Automation.vue')
    },
    {
        path: "/ConnectionManagement",
        name: "ConnectionManagement",
        component: () => import('@/views/setTlement/ConnectionManagement.vue')
    },    
    {
        path: "/WriteStatement",
        name: "WriteStatement",
        component: () => import('@/views/setTlement/WriteStatement.vue')
    },
    {
        path: "/SearchStatement",
        name: "SearchStatement",
        component: () => import('@/views/setTlement/SearchStatement.vue')
    },
    {
        path: "/taxBillSummary",
        name: "taxBillSummary",
        component: () => import('@/views/setTlement/taxBillSummary.vue')
    }    
  ]