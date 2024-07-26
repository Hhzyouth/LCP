import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from "@/view/Home.vue"
import LibraryView from '../view/Library.vue'

const routes = [
  { 
    path: '/',
    component: HomeView 
  },
  { 
    path: '/Library',
    component: LibraryView
  },
  { 
    path: '/Competition',
    component: import("@/view/Competition.vue")
  },
  { 
    path: '/Store',
    component: import("@/view/Store.vue")
  },
  { 
    path: '/Search/:q',
    component: ()=>import("@/view/Search.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router