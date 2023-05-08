import Vue from 'vue' 
//Dòng này để import vue-router
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Signup from '../components/signUpAccount.vue'
import TodoList from '@/view/TodoList.vue'
import Acc2 from '../components/Account/Acc2.vue'
import Acc3 from '@/components/Account/Acc3.vue'


Vue.use(Router)


const router = new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Login', // tên route
      component: Login // component route sử dụng
    },
    {
      path: '/signup', ///path của route
      name: 'Signup', // tên route
      component: Signup // component route sử dụng
    },
    {
      path: '/acc1',
      name: 'Acc1',
      component: TodoList
    },
    {
      path: '/acc2',
      name: 'Acc2',
      component: Acc2
    },
    {
      path: '/acc3',
      name: 'Acc3',
      component: Acc3
    }
 
  ]
})
export default router;
