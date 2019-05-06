import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import film from '@/pages/film'
import book from '@/pages/book'
import music from '@/pages/music'
import filmDetail from '@/pages/filmDetail'
import bookDetail from '@/pages/bookDetail'
import musicDetail from '@/pages/musicDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book',
      component:book
    },
    {
      path: '/film',
      name: 'film',
      component: film
    },
    {
      path:'/book',
      name:'book',
      component:book
    },
    {
      path:'/music',
      name:'music',
      component:music
    },
    {
      path: '/filmDetail/:id',
      name: 'filmDetail',
      component: filmDetail
    },
    {
      path:'/bookDetail/:id',
      name:'bookDetail',
      component:bookDetail
    },
    {
      path:'/musicDetail/:id',
      name:'musicDetail',
      component:musicDetail
    }
  ]
})
