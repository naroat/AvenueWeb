//对外暴露配置路由(常量路由)
export const constantRoute = [
  //首页
  {
    path: '/',
    component: () => import('@/components/Home/Home.vue'),
    name: 'home',
    meta: {
      keywords: '标题',
      description: '描述',
    }
  },
  //user
  {
    path: '/userinfo',
    component: () => import('@/components/User/Info/Info.vue'),
    name: 'userinfo',
    meta: {
      title: "个人中心",
      keywords: '',
      description: '',
    }
  },
  // 关于
  {
    path: '/about',
    component: () => import('@/components/Home/About.vue'),
    name: 'about',
    meta: {
      title: "关于",
      keywords: '',
      description: '',
    }
  },
  //隐私政策
  {
    path: '/privacy',
    component: () => import('@/components/Home/Privacy.vue'),
    name: 'privacy',
    meta: {
      title: "privacy"
    }
  },
  //服务条款
  {
    path: '/terms',
    component: () => import('@/components/Home/Terms.vue'),
    name: 'terms',
    meta: {
      title: "terms"
    }
  },
  //其他路由
  {
    path: '/404',
    component: () => import('@/components/404/404.vue'),
    name: '404',
    meta: {
      title: "404"
    }
  },
  {
    //重定向
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
