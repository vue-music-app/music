import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import tuijian from '@/components/navbar/tuijian'
import geshou from '@/components/navbar/geshou'
import paihang from '@/components/navbar/paihang'
import sousuo from '@/components/navbar/sousuo'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'tuijian',
          component: tuijian,
          children: [
            {
              path: ':id',
              component: detail
            }
          ]
        },
        {
          path: 'geshou',
          name: 'geshou',
          component: geshou
        },
        {
          path: 'paihang',
          name: 'paihang',
          component: paihang
        },
        {
          path: 'sousuo',
          name: 'sousuo',
          component: sousuo
        },
        {
          path: '/index',
          redirect: 'tuijian'
        }
      ]
    }
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index,
    //   children: [
    //     {
    //       path: 'tuijian',
    //       component: tuijian,
    //       children: [
    //         {
    //           path: ':id',
    //           component: detail
    //         }
    //       ]
    //     },
    //     {
    //       path: 'geshou',
    //       name: 'geshou',
    //       component: geshou
    //     },
    //     {
    //       path: 'paihang',
    //       name: 'paihang',
    //       component: paihang
    //     },
    //     {
    //       path: 'sousuo',
    //       name: 'sousuo',
    //       component: sousuo
    //     },
    // {
    //   path: '/index',
    //   redirect: 'tuijian'
    // }
    //   ]
    // }
  ]
})
