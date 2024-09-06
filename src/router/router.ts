//对外暴露配置路由(常量路由)
export const constantRoute = [
  //首页
  {
    path: '/',
    component: () => import('@/components/Home/Home.vue'),
    name: 'home',
    meta: {
      keywords: '网址导航，网址大全，产品发现，收集导航，ai导航，导航集合，产品导航，收藏夹',
      description: 'Avenue（www.avenue.com）是一个简洁的网址导航网站。发现、收集、分享，Web开发、设计工作、生活娱乐中的优质资源、工具。',
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
      title: "关于本站",
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
      title: "隐私政策"
    }
  },
  //服务条款
  {
    path: '/terms',
    component: () => import('@/components/Home/Terms.vue'),
    name: 'terms',
    meta: {
      title: "服务条款"
    }
  },
    //更新日志
    {
      path: '/changelog',
      component: () => import('@/components/Home/ChangeLog.vue'),
      name: 'changelog',
      meta: {
        title: "更新日志"
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
