import { createRouter, createWebHistory, RouteRecordInfo, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import GalleryItemView from '@/views/GalleryItemView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import InputView from '@/views/InputView.vue'
import DownloadView from '../views/DownloadView.vue'
import WidgetsView from '@/views/WidgetsView.vue'
import BackgroundGrid from '@/components/backgrounds/BackgroundGrid.vue'
import BackgroundWidgets from '@/components/backgrounds/backgroundWidgets.vue'
import BackgroundAbout from '@/components/backgrounds/backgroundAbout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
     meta: {
      background: BackgroundAbout
    },
  },
  {
    path: '/vent',
    name: 'vent',
    component: () => import('../views/KebabView.vue'),
  },
  {
    path: '/library',
    name: 'library',
    component: GalleryView,
    meta: {
      background: BackgroundGrid
    },
  },
  {
    path: '/input',
    name: 'input',
    component: InputView,
     meta: {
      background: BackgroundAbout
    },
  },
  {
    path: '/widgets',
    name: 'widgets',
    meta: {
      background: BackgroundWidgets
    },
    component: WidgetsView
  },
  {
    path: '/gallery/:id',
    name: 'gallery-item',
    component: GalleryItemView,
    props: true,
    meta: {
      background: BackgroundGrid
    },
  },
  {
    path: '/script',
    name: 'script',
    component: DownloadView
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }, // last resort fallback 404
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  const isNotFoundRoute =
    to.matched.length === 1 && to.matched[0].name === 'NotFound'

  if (!isNotFoundRoute) {
    return next()
  }

  if (to.fullPath.endsWith('.html')) { // fallback html legacy check lmao
    return next()
  }

  let checkUrl = to.fullPath
  if (checkUrl.endsWith('/')) {
    checkUrl = checkUrl.slice(0, -1)
  }
  checkUrl += '/index.html'

  try {
    const response = await fetch(checkUrl, { method: 'HEAD' })

    if (response.ok) {
      window.location.href = checkUrl
      return
    }

    next()

  } catch (err) {
    next()
  }
})



export default router
