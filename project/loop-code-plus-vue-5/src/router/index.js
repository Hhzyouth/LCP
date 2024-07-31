import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from "@/view/Home.vue"
import LibraryView from '../view/Library.vue'
// import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

const routes = [
  { 
    path: '/',
    component: HomeView 
  },
  { 
    path: '/Library',
    component: LibraryView,
  },
  { 
    path: '/Competition',
    component: ()=>import("@/view/Competition.vue")
  },
  { 
    path: '/Store',
    component: ()=>import("@/view/Store.vue")
  },
  { 
    path: '/Search/:q',
    component: ()=>import("@/view/Search.vue")
  },
  { 
    path: '/Course',
    component: ()=>import("@/view/Course.vue")
  },
  { 
    path: '/Login',
    component: ()=>import("@/view/tool/Login.vue")
  },
  { 
    path: '/Python',
    component: ()=>import("@/view/Library/python/Python.vue"),
    redirect:'/Python/Python-introduction',
    children:[
      { 
        path: 'Python-introduction',
        component: ()=>import("@/view/Library/python/Python-introduction.vue")
      },
      { 
        path: 'Python-install',
        component: ()=>import("@/view/Library/python/Python-install.vue")
      },
      { 
        path: 'Python-calculator',
        component: ()=>import("@/view/Library/python/Python-calculator.vue")
      },
      { 
        path: 'Python-basicSyntax',
        component: ()=>import("@/view/Library/python/Python-basicSyntax.vue")
      },
      { 
        path: 'Python-interpreter',
        component: ()=>import("@/view/Library/python/Python-interpreter.vue")
      },
      { 
        path: 'Python-comment',
        component: ()=>import("@/view/Library/python/Python-comment.vue")
      },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router