import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const gwwd = () => import('@/components/gwwd')
const index = () => import('@/pages/index')
const chatroom = () => import('@/pages/chatroom')
const personal = () => import('@/pages/person/personal')
const article = () => import('@/pages/article/article')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gwwd',
      name: 'gwwd',
      component: gwwd
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: chatroom
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
