import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: "/home",
    component: () => import('../views/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('../components/Welcome.vue')
      },
      {
        path: '/users',
        component: () => import('../components/User.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook}
  // to将要访问的路径 from代表从哪个路径跳转而来
  // next 是一个函数，表示放行 next() 放行 next('/login') 强制跳转到登录页面
  // 如果是登录页，直接放行即可
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
