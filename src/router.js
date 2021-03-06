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
        needLogin: false,
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
        needLogin: false,
      }
    },
    {
      path: '/text-page',
      name: 'textPage',
      component: () => import(/* webpackChunkName: "about" */ './views/TextPage.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/toggle-switch',
      name: 'toggleSwitch',
      component: () => import(/* webpackChunkName: "about" */ './views/ToggleSwitch.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/container',
      name: 'container',
      component: () => import(/* webpackChunkName: "about" */ './views/Container.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/bfc',
      name: 'bfc',
      component: () => import(/* webpackChunkName: "about" */ './views/BFC.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/user-info',
      name: 'userInfo',
      component: () => import(/* webpackChunkName: "about" */ './views/UserInfo.vue'),
      meta: {
        showTabbar: true,
        needLogin: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/combination',
      name: 'combination',
      component: () => import(/* webpackChunkName: "about" */ './views/Combination.vue'),
      meta: {
        showTabbar: false,
        needLogin: true,
      }
    },
    {
      path: '/learn-ts',
      name: 'learnTs',
      component: () => import(/* webpackChunkName: "about" */ './views/LearnTs.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/cats',
      name: 'cats',
      component: () => import(/* webpackChunkName: "about" */ './views/Cat.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import(/* webpackChunkName: "about" */ './views/Layout.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/key-use',
      name: 'keyUse',
      component: () => import(/* webpackChunkName: "about" */ './views/KeyUse.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/list-obj-change',
      name: 'listObjChange',
      component: () => import(/* webpackChunkName: "about" */ './views/ListAndObjChange.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/use-component',
      name: 'useComponent',
      component: () => import(/* webpackChunkName: "about" */ './views/UseComponent.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/display',
      name: 'display',
      component: () => import(/* webpackChunkName: "display" */ './views/Display.vue'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/table-render',
      name: 'tableRender',
      component: () => import(/* webpackChunkName: "display" */ './views/table/TableRender'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/table-slot',
      name: 'tableSlot',
      component: () => import(/* webpackChunkName: "display" */ './views/table/TableSlot'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import(/* webpackChunkName: "Tree" */ './views/Tree'),
      meta: {
        showTabbar: true,
        needLogin: false,
      }
    },
    {
      path: '/drag',
      name: 'drag',
      component: () => import(/* webpackChunkName: "about" */ './views/Drag.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/slot-use',
      name: 'slotUse',
      component: () => import(/* webpackChunkName: "about" */ './views/SlotUse.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/css-learn',
      name: 'cssLearn',
      component: () => import(/* webpackChunkName: "about" */ './views/CssLearn.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ './views/Test.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    },
    {
      path: '/array-change',
      name: 'arrayChange',
      component: () => import('./views/ArrayChange.vue'),
      meta: {
        showTabbar: false,
        needLogin: false,
      }
    }
  ]
})
