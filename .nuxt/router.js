import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e840a66 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0daaf773 = () => interopDefault(import('../pages/toolbox.vue' /* webpackChunkName: "pages/toolbox" */))
const _3f1454dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7e840a66,
    name: "about"
  }, {
    path: "/toolbox",
    component: _0daaf773,
    name: "toolbox"
  }, {
    path: "/",
    component: _3f1454dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
