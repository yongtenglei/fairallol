import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue'),
  },
  {
    path: '/solution',
    name: 'solution',
    component: () =>
      import(
        /* webpackChunkName: "solution" */ '../views/Solution/Solution.vue'
      ),
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/Test/Test.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () =>
      import(
        /* webpackChunkName: "notFound" */ '../views/NotFound/NotFound.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
