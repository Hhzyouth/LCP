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
    path: '/Problem',
    component: ()=>import("@/view/Problem.vue")
  },
  { 
    path: '/Problem/WorkingArea/:p',
    component: ()=>import("@/view/problem/WorkingArea.vue")
  },
  { 
    path: '/MyProblem',
    component: ()=>import("@/view/tool/MyProblem.vue")
  },
  { 
    path: '/MyProblem/EditProblem/:ep',
    component: ()=>import("@/view/tool/EditProblem.vue")
  },
  { 
    path: '/MyProblem/EditCollection/:ec',
    component: ()=>import("@/view/tool/EditCollection.vue")
  },
  { 
    path: '/MySolution',
    component: ()=>import("@/view/tool/MySolution.vue")
  },
  { 
    path: '/Login',
    component: ()=>import("@/view/tool/Login.vue")
  },
  { 
    path: '/LCPlab',
    component: ()=>import("@/view/tool/LCPlab.vue")
  },
  {
    path: '/Backpack',
    component: ()=>import("@/view/tool/Backpack.vue")
  },
  {
    path:'/PersonalCenter',
    component: ()=>import("@/view/tool/PersonalCenter.vue")
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
      { 
        path: 'Python-controller',
        component: ()=>import("@/view/Library/python/Python-controller.vue")
      },
      { 
        path: 'Python-dataStructure',
        component: ()=>import("@/view/Library/python/Python-dataStructure.vue")
      },
      { 
        path: 'Python-module',
        component: ()=>import("@/view/Library/python/Python-module.vue")
      },
      { 
        path: 'Python-inputAndOuput',
        component: ()=>import("@/view/Library/python/Python-inputAndOuput.vue")
      },
      { 
        path: 'Python-error',
        component: ()=>import("@/view/Library/python/Python-error.vue")
      },
      { 
        path: 'Python-class',
        component: ()=>import("@/view/Library/python/Python-class.vue")
      },
      { 
        path: 'Python-standardLibrary',
        component: ()=>import("@/view/Library/python/Python-standardLibrary.vue")
      },
      { 
        path: 'Python-next',
        component: ()=>import("@/view/Library/python/Python-next.vue")
      },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router