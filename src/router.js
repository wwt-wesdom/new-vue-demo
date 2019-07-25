import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from , savePosition) {
    return savePosition ? savePosition : {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/text-page',
      name: 'textPage',
      component: () => import(/* webpackChunkName: "about" */ './views/TextPage.vue')
    },
    {
      path: '/toggle-switch',
      name: 'toggleSwitch',
      component: () => import(/* webpackChunkName: "about" */ './views/ToggleSwitch.vue'),
    },
    {
      path: '/container',
      name: 'container',
      component: () => import(/* webpackChunkName: "about" */ './views/Container.vue'),
    }
  ]
})
