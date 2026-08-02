import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import GalleryItemView from '@/views/GalleryItemView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import InputView from '@/views/InputView.vue'
import DownloadView from '../views/DownloadView.vue'

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
    path: '/vent',
    name: 'vent',
    component: () => import('../views/KebabView.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/input',
    name: 'input',
    component: InputView
  },
  {
    path: '/gallery/:id',
    name: 'gallery-item',
    component: GalleryItemView,
    props: true
  },
  {
    path: '/script',
    name: 'script',
    component: DownloadView
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  const isNotFoundRoute =
    to.matched.length === 1 && to.matched[0].name === 'NotFound'

  // If it's not a "real 404" route, proceed normally
  if (!isNotFoundRoute) {
    return next()
  }

  // 🚫 PREVENT INFINITE LOOP:
  // If the URL already points to a .html file, don't try to append index.html again
  if (to.fullPath.endsWith('.html')) {
    return next()
  }

  // Build fallback static path
  let checkUrl = to.fullPath
  if (checkUrl.endsWith('/')) {
    checkUrl = checkUrl.slice(0, -1)
  }
  checkUrl += '/index.html'

  try {
    const response = await fetch(checkUrl, { method: 'HEAD' })

    if (response.ok) {
      // Static file exists → load it directly (hard reload to bypass SPA routing)
      window.location.href = checkUrl
      return
    }

    // No static file found → show Vue's NotFoundView
    next()

  } catch (err) {
    next()
  }
})



export default router
