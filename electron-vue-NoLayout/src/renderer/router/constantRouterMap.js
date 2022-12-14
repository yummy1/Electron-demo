const Notfound = () => import('@/views/404')
export default [
  { path: '*', component: Notfound },
  { path: '/', name: '首页', component: () => import('@/views/home') },
  { path: '/breakfastDetail', name: '早餐详情', component: () => import('@/views/breakfastDetail') }
]
