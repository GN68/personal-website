import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import GalleryItemView from '@/views/GalleryItemView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/gallery/:id',
    name: 'gallery-item',
    component: GalleryItemView,
    props: true
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.length) {
    return next()
  }

  let checkUrl = to.fullPath
  if (checkUrl.endsWith('/')) {
    checkUrl = checkUrl.slice(0, -1)
  }
  checkUrl = checkUrl + '/index.html'

  try {
    const response = await fetch(checkUrl, { method: 'HEAD' })

    if (response.ok) {
      window.location.href = to.fullPath
    } else {
      // Not found -> show Vue 404
      next()
    }
  } catch (err) {
    next()
  }
})

export default router
