import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from , savePosition) {
    return savePosition ? savePosition : {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/text-page',
      name: 'textPage',
      component: () => import(/* webpackChunkName: "about" */ './views/TextPage.vue'),
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/toggle-switch',
      name: 'toggleSwitch',
      component: () => import(/* webpackChunkName: "about" */ './views/ToggleSwitch.vue'),
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/container',
      name: 'container',
      component: () => import(/* webpackChunkName: "about" */ './views/Container.vue'),
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/bfc',
      name: 'bfc',
      component: () => import(/* webpackChunkName: "about" */ './views/BlockFormattingContext.vue'),
      meta: {
        showTabbar: true,
        login: false,
      }
    },
    {
      path: '/user-info',
      name: 'userInfo',
      component: () => import(/* webpackChunkName: "about" */ './views/UserInfo.vue'),
      meta: {
        showTabbar: true,
        login: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
        showTabbar: false,
        login: false,
      }
    }
  ]
})
