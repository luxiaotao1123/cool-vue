import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Blog from '@/page/Blog'
import Ali from '@/components/Ali'

Vue.use(Router)

export default new Router({
  // 缺省hash模式（#）
  // mode: 'history',
  // 路由
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 博客详情
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    },
    // alipay Test
    {
      path: '/ali',
      name: 'ali',
      component: Ali
    }
  ]
})
